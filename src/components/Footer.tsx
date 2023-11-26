import { FootBar } from "./styled/widgets/Widgets";
import { Floating } from "./styled/containers/containers";

const Footer = () => {
  return (
    <FootBar>
      <Floating>
        <p>Want to get in touch with me?</p>
        <h1>
          Email Me Via <a href="mailto:">peteralidante254@gmail.com</a>
        </h1>
        <button>Email ME</button>
      </Floating>
      <div>
        <h1>About me</h1>
        <p>Have been a developer for some time building some systems</p>
        <button>Learn More</button>
      </div>
      <div>
        <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div>
        <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div>
        <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <hr />
      <div>&copy; 2023 Alidante</div>
    </FootBar>
  );
};

export default Footer;
