import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/Home';

function App() {
  const links: { label: string; url: string; icon: string }[] = [
    { label: 'Music', url: 'https://google.com', icon: 'music-note' },
    { label: 'Home', url: 'https://example.com', icon: 'house-door' },
    { label: 'Alidante_254', url: 'https://github.com', icon: 'person' },
    { label: 'Twitter', url: 'https://github.com', icon: 'twitter' },
    { label: 'Light', url: 'https://github.com', icon: 'moon' },
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

  return (
    <div>
      {/* The navigation bar containing links */}
      <header className={` ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar container p-3">
          {links.map((link, index) => (
            <a key={index} href={link.url} className='nav-link'>
              <i className={`m-2 bi bi-${link.icon.toLowerCase()}`}></i>
              <span className="d-none d-sm-inline">{link.label}</span>
            </a>
          ))}
        </nav>
      </header>

      {/* The main content */}
      <main>
        <Home />
      </main>

      {/* The footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <nav className="row">
            <div className="col-6 col-sm-3 mt-2">
              <h5>Direct Contact Links</h5>
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
              <h5>Website Links</h5>
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
              <p> Alidante_254 LTD</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
