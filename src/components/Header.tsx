import { useState, useEffect, useRef } from "react";
import { HeaderLink } from "./styled/links/links";
import { ButtonIcon } from "./styled/icons/icons";
import { NavBar, Logo, AppBar } from "./styled/widgets/Widgets";
import { LogoImage } from "./styled/images/images";
import { SecondaryButton, DropDownButton } from "./styled/buttons/buttons";

interface Link {
  label: string;
  url: string;
}

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  //FETCH JSON DATA FROM A JSON FILE
  const [headerdata, setHeaderData] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/header.json");
        const data = await response.json();
        setHeaderData(data["Pages-Links"]);
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

  //Toggle the navbar for smaller devices and its events
  const [showLinks, setShowLinks] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  
  return (
    <AppBar $isScrolled={isScrolled} ref={navRef}>
      <a href="/">
        <Logo>
          <LogoImage src="assets/logo.png" alt="logo" />
        </Logo>
      </a>
      <NavBar $showLinks={showLinks}>
        {headerdata.map((link) => (
          <HeaderLink key={link.label} href={link.url}>
            {link.label}
          </HeaderLink>
        ))}
      </NavBar>
      <DropDownButton onClick={toggleLinks}>
        {currentPage}
        <ButtonIcon className="fas fa-caret-down" />
      </DropDownButton>
      <SecondaryButton>Hire Me</SecondaryButton>
    </AppBar>
  );
};

export default Header;
