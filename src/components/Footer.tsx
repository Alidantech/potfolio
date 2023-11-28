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
import { PrimaryButton } from "./styled/buttons/buttons";
import { FooterLink, IconLink } from "./styled/links/links";
import { FooterNavHeading, ProgressTitle } from "./styled/text/text";
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
          <FooterNavHeading>About Alidante</FooterNavHeading>

          <PrimaryButton>Learn More</PrimaryButton>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Quick Links</FooterNavHeading>
          <FooterLink>Home</FooterLink>
          <FooterLink>Projects</FooterLink>
          <FooterLink>Contacts</FooterLink>
          <FooterLink>Music</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Contact Me</FooterNavHeading>
          <FooterLink>07 45 5555 342</FooterLink>
          <FooterLink>07 45 5555 342</FooterLink>
          <FooterLink>07 45 5555 342</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>Repositories</FooterNavHeading>
          <FooterLink>Upcoming</FooterLink>
          <FooterLink>Organiser</FooterLink>
          <FooterLink>Dev Auto</FooterLink>
        </FooterNav>
      </FlexColumns>
      <Divider />
      <Credits>
        <CopyRights>&copy; Alidante</CopyRights>
        <FlexColumns>
          <IconLink href="/">IG</IconLink>
          <IconLink href="/">FB</IconLink>
          <IconLink href="/">X</IconLink>
          <IconLink href="/">TT</IconLink>
        </FlexColumns>
      </Credits>
    </FootBar>
  );
};

export default Footer;
