import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';

function App() {
  const links: { label: string; url: string; icon: string }[] = [
    { label: 'HOME', url: '', icon: 'music-note' },
    { label: 'PROJECTS', url: '', icon: 'house-door' },
    { label: 'NEWS', url: '', icon: 'person' },
    { label: 'SKILLS', url: '', icon: 'twitter' },
    { label: 'ABOUT', url: '', icon: 'moon' },
  ];
  const contactLinks = [
    { label: 'Email', url: 'Send Email', icon: 'envelope-fill' },
    { label: 'Phone', url: '+254748311679', icon: 'phone-fill' },
    { label: 'WhatsApp', url: '+254746977253', icon: 'whatsapp' },
    { label: 'Telegram', url: '+254746977253', icon: 'telegram' },
  ];

  const socialMediaLinks = [
    { label: 'Twitter', url: 'twitter.com', icon: 'twitter' },
    { label: 'Facebook', url: 'facebook.com', icon: 'facebook' },
    { label: 'Instagram', url: 'instagram.com', icon: 'instagram' },
    { label: 'TikTok', url: 'tiktok.com', icon: 'tiktok' },
    { label: 'YouTube', url: 'youtube.com', icon: 'youtube' },
  ];

  const platformLinks = [
    { label: 'LinkedIn', url: 'linkedin.com', icon: 'linkedin' },
    { label: 'Upwork', url: 'upwork.com', icon: 'bag-check' },
    { label: 'Freelancer', url: 'freelancer.com', icon: 'briefcase-fill' },
    { label: 'GitHub', url: 'github.com', icon: 'github' },
    { label: 'Kaggle', url: 'kaggle.com', icon: 'file-code' },
  ];

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      {/* The navigation bar containing links */}
      <header className={` ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
           <img src="1598876904162478198015-128.png" alt="logo"/>
        </div>
        <nav className={`nav-links ${showLinks ? 'show' : ''}`}>
          {links.map((link, index) => (
            <a key={index} href={link.url} className=''>
              <span className="">{link.label}</span>
            </a>
          ))}
        </nav>
        <button className='DropDown' onClick={toggleLinks}>HOME <i className="bi bi-caret-down"></i></button>
        <div className="hire-btn">
          <button className='btn-hire'>Hire Me</button>
        </div>
      </header>

      {/* The main content */}
      <main>
        <Home />
      </main>

      {/* The footer */}
      <footer className="py-4">
        <div className="container">
          <nav className="row">
            <div className="col-6 col-sm-3 mt-2">
              <h5>Direct Contact</h5>
                {contactLinks.map((link, index) => (
                  <a key={index} href={link.url} className='nav-link  text-success'>
                    <i className={`m-2 bi bi-${link.icon.toLowerCase()}`}></i>
                    {" "+link.url}
                  </a>
                ))}
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <h5>Social Media</h5>
                {socialMediaLinks.map((link, index) => (
                  <a key={index} href={link.url} className='nav-link  text-success'>
                    <i className={`m-2 bi bi-${link.icon.toLowerCase()}`}></i>
                    {link.label}
                  </a>
                ))}
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <h5>Platform Links</h5>
                {platformLinks.map((link, index) => (
                  <a key={index} href={link.url} className='nav-link  text-success'>
                    <i className={`m-2 bi bi-${link.icon.toLowerCase()}`}></i>
                    {link.label}
                  </a>
                ))}
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <h5>Website Pages</h5>
                {links.map((link, index) => (
                  <a key={index} href={link.url} className='nav-link text-success'>
                    <i className={`m-2 bi bi-${link.icon.toLowerCase()}`}></i>
                    {link.label}
                  </a>
                ))}
            </div>
          </nav>
        </div>
        <hr className='m-2 text-primary' />
          <div className='text-center pt-3 pb-1'>
              <b className='mb-3'>&copy; {new Date().getFullYear()}</b>
              <p>Alidante254</p>
          </div>
      </footer>
    </>
  );
}

export default App;
