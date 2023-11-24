import { useState, useEffect } from "react";

interface Link {
  label: string;
  url: string;
  icon: string;
}

const Header = () => {
  
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/links.json");
        const data = await response.json();
        setLinks(data["Pages-Links"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className={` ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="assets/favicon.png" alt="logo" />
      </div>
      <nav className={`nav-links ${showLinks ? "show" : ""}`}>
        {links.map((link) => (
          <a key={link.label} href={link.url} className="">
            <span className={`fa fa-${link.icon}`}></span>
            <span className="">{link.label}</span>
          </a>
        ))}
      </nav>
      <button className="DropDown" onClick={toggleLinks}>
        HOME <i className="bi bi-caret-down"></i>
      </button>
      <div className="hire-btn">
        <button className="btn-hire">Hire Me</button>
      </div>
    </header>
  );
};

export default Header;
