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
import { useState, useEffect } from "react";

const Footer = () => {
  // Fetch data from the home.json file
  const [footerdata, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/footer.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  if (!footerdata) {
    return <div>Loading...</div>;
  }

  return (
    <FootBar>
      <Floating>
        {footerdata.statistics.map(
          (statistic: { title: String; count: String }, index: number) => (
            <ProgressBox key={index}>
              <ProgressTitle>{statistic.title}</ProgressTitle>
              <RoundProgressBar>{statistic.count}</RoundProgressBar>
            </ProgressBox>
          )
        )}
      </Floating>
      <FlexColumns>
        <FooterNav>
          <FooterNavHeading>{footerdata.info.heading}</FooterNavHeading>
          <SmallText>{footerdata.info.text}</SmallText>
          <a href={footerdata.info.link.href}>
            <PrimaryButton>{footerdata.info.link.text}</PrimaryButton>
          </a>
        </FooterNav>
        {footerdata.links.map(
          (
            linksType: {
              heading: String;
              list: [];
            },
            index: number
          ) => (
            <FooterNav key={index}>
              <FooterNavHeading>{linksType.heading}</FooterNavHeading>
              {linksType.list.map(
                (
                  link: { title: String; icon: string; link: string },
                  index: number
                ) => (
                  <FooterLink href={link.link} key={index}>
                    <LinkIcon className={link.icon} />
                    {link.title}
                  </FooterLink>
                )
              )}
            </FooterNav>
          )
        )}
      </FlexColumns>
      <Divider />
      <Credits>
        <CopyRights>
          &copy;
          {footerdata.credits.copyright}
          &nbsp;
          {footerdata.credits.owner}
        </CopyRights>
        <FlexColumns>
          {footerdata.socials.map(
            (
              social: { title: String; icon: string; link: string },
              index: number
            ) => (
              <IconLink href={social.link} key={index}>
                <LinkIcon className={social.icon} />
              </IconLink>
            )
          )}
        </FlexColumns>
      </Credits>
    </FootBar>
  );
};

export default Footer;
