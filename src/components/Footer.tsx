import { FootBar } from "./styled/widgets/Widgets";
import { Floating, FooterNav,FlexColumns } from "./styled/containers/containers";
import { FooterLink } from "./styled/links/links";
import { FooterNavHeading } from "./styled/text/text";


const Footer = () => {
  return (
    <FootBar>
      <Floating></Floating>
      <FlexColumns>
        <FooterNav>
          <FooterNavHeading>My Links are here</FooterNavHeading>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>My Links are here</FooterNavHeading>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>My Links are here</FooterNavHeading>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterNavHeading>My Links are here</FooterNavHeading>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
          <FooterLink>My Link</FooterLink>
        </FooterNav>
      </FlexColumns>
    </FootBar>
  );
};

export default Footer;
