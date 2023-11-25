import { useState, useEffect } from "react";
import { HeaderLink } from "./styled/links/links";
import { ButtonIcon } from "./styled/icons/icons";
import { NavBar, Logo, AppBar } from "./styled/widgets/Widgets";
import { LogoImage } from "./styled/images/images";
import { TextButton, DropDownButton } from "./styled/buttons/buttons";

interface Link {
  label: string;
  url: string;
}

interface HeaderProps {
  currentPage: string;
}


const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  //FETCH JSON DATA FROM A JSON FILE
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/links.json");
        const data = await response.json();
        setLinks(data["Pages-Links"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Change the header props when use scrolls
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle navbar for smaller screens
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <AppBar $isScrolled={isScrolled}>
      <Logo>
        <LogoImage src="assets/favicon.png" alt="logo" />
      </Logo>
      <NavBar $showLinks={showLinks}>
        {links.map((link) => (
          <HeaderLink key={link.label} href={link.url}>
            {link.label}
          </HeaderLink>
        ))}
      </NavBar>
      <DropDownButton onClick={toggleLinks}>
        {currentPage}
        <ButtonIcon className="fas fa-caret-down" />
      </DropDownButton>
      <TextButton>Hire Me</TextButton>
    </AppBar>
  );
};

export default Header;
