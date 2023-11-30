import { FootBar } from "./styled/widgets/Widgets";
import {
  Floating,
  FooterNav,
  FlexColumns,
  Divider,
  ProgressBox,
  Credits,
  CopyRights,
} from "./styled/containers/containers";

import { LinkIcon } from "./styled/icons/icons";
import { PrimaryButton } from "./styled/buttons/buttons";
import { FooterLink, IconLink } from "./styled/links/links";
import { FooterNavHeading, ProgressTitle, SmallText } from "./styled/text/text";
import { RoundProgressBar } from "./styled/items/items";

const Footer = () => {
  return (
    <FootBar>
      <Floating>
        <ProgressBox>
          <ProgressTitle>Projects</ProgressTitle>
          <RoundProgressBar>155</RoundProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTitle>Songs</ProgressTitle>
          <RoundProgressBar>15</RoundProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTitle>Companies</ProgressTitle>
          <RoundProgressBar>7</RoundProgressBar>
        </ProgressBox>
      </Floating>
      <FlexColumns>
        <FooterNav>
          <FooterNavHeading>About Myself</FooterNavHeading>
          <SmallText>
            Passionate developer with expertise in Data Science, OOP, and Web
            Development.
          </SmallText>
          <a href="/about">
            <PrimaryButton>Learn More</PrimaryButton>
          </a>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Quick Links</FooterNavHeading>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/contact">Contacts</FooterLink>
          <FooterLink href="/music">Music</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Contact Me</FooterNavHeading>
          <FooterLink href="tel:+254748311679">
            <LinkIcon className="fas fa-phone" />
            0748311679
          </FooterLink>
          <FooterLink href="https://t.me/+254748311679">
            <LinkIcon className="fab fa-telegram" />
            0748311679
          </FooterLink>
          <FooterLink href="https://wa.me/+254746977253">
            <LinkIcon className="fab fa-whatsapp" />
            0748311679
          </FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Repositories</FooterNavHeading>
          <FooterLink href="https://github.com/Alidante254/upcoming">
            <LinkIcon className="fab fa-github" />
            Upcoming
          </FooterLink>
          <FooterLink href="https://github.com/Alidante254/organiser">
            <LinkIcon className="fab fa-github" />
            Organiser
          </FooterLink>
          <FooterLink href="https://github.com/Alidante254/dev-auto">
            <LinkIcon className="fab fa-github" />
            Dev Auto
          </FooterLink>
        </FooterNav>
      </FlexColumns>
      <Divider />
      <Credits>
        <CopyRights>&copy; 2023 &nbsp; Alidante</CopyRights>
        <FlexColumns>
          <IconLink href="https://twitter.com/alidantepeter">
            <LinkIcon className="fab fa-twitter" />
          </IconLink>
          <IconLink href="https://facebook.com/Alidante_Peter">
            <LinkIcon className="fab fa-facebook" />
          </IconLink>
          <IconLink href="https://instagram.com/alidante_254">
            <LinkIcon className="fab fa-instagram" />
          </IconLink>
          <IconLink href="https://tiktok.com/@alidante">
            <LinkIcon className="fab fa-tiktok" />
          </IconLink>
        </FlexColumns>
      </Credits>
    </FootBar>
  );
};

export default Footer;
