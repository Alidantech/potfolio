import {
  Welcome,
  PersonalInfo,
  Skills,
  Stacks,
  Testimonials,
} from "../styled/sections/sections";
import { ProfileImage, StickyImage } from "../styled/images/images";
import {
  Heading1,
  Heading2,
  Paragraph,
  InfoData,
  ProgressTitle,
} from "../styled/text/text";
import {
  StackCard,
  InfoCard,
  SkillCard,
  StackCardDetails,
  StackCardInfo,
} from "../styled/cards/cards";
import {
  FlexColumns,
  SpacedColumns,
  FlexRows,
  ListItem,
  InfoList,
  InfoBox,
  SkillsBox,
  ProfileBox,
  DescBox,
} from "../styled/containers/containers";
import {
  DecoratedUnderline,
  TransparentBg,
  AnimatedFrame,
} from "../styled/items/items";
import { StackCardImage, ImageBox } from "../styled/images/images";
import { ButtonIcon, SkillIcon } from "../styled/icons/icons";
import { FullProgressBar, ProgressBar } from "../styled/widgets/Widgets";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import { IconLink } from "../styled/links/IconLink.styled";
import DataLoading from "../DataLoading";

function Home() {
  // Fetch homeData from the home.json file
  const [homeData, sethomeData] = useState<any | null>(null);

  useEffect(() => {
    const fetchhomeData = async () => {
      try {
        const response = await fetch("data/home.json");
        const jsonData = await response.json();
        sethomeData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON homeData:", error);
      }
    };

    fetchhomeData();
  }, []);

  if (!homeData) {
    return <DataLoading />;
  }

  return (
    <>
      {/* Welcome Section */}
      <Welcome>
        <DescBox>
          <FlexRows>
            <Heading1>{homeData.welcome.heading}</Heading1>
            <Paragraph>{homeData.welcome.description}</Paragraph>
          </FlexRows>
          <FlexRows>
            <ProfileImage src={homeData.welcome.image} />
          </FlexRows>
          <FlexRows>
            <a href={homeData.welcome.link1.href}>
              {homeData.welcome.link1.text}
            </a>
            <DecoratedUnderline />
            <Heading2>{homeData.welcome.title}</Heading2>
            <InfoList>
              {homeData.welcome.infoList.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </InfoList>
            <DecoratedUnderline />
            <a href={homeData.welcome.link2.href}>
              {homeData.welcome.link2.text}
            </a>
          </FlexRows>
        </DescBox>
        <SpacedColumns>
          {homeData.welcome.animatedFrames.map(
            (frame: string, index: number) => (
              <AnimatedFrame key={index} src={frame} />
            )
          )}
        </SpacedColumns>
      </Welcome>

      {/* PersonalInfo Section */}
      <PersonalInfo>
        <InfoCard>
          <InfoBox>
            <ProfileBox>
              <ProfileImage src={homeData.personalInfo.image} />
              <InfoList>
                <ListItem>
                  <InfoData>{homeData.personalInfo.infoList.fullName}</InfoData>
                </ListItem>
                {homeData.personalInfo.infoList.stack.map(
                  (item: string, index: number) => (
                    <ListItem key={index}>
                      <InfoData>{item}</InfoData>
                    </ListItem>
                  )
                )}
              </InfoList>
            </ProfileBox>
            <SkillsBox>
              <Heading2>{homeData.personalInfo.skills.title}</Heading2>
              {Object.entries(homeData.personalInfo.skills.progressList).map(
                ([skill, progress], index) => (
                  <React.Fragment key={index}>
                    <Paragraph>{skill}</Paragraph>
                    <FullProgressBar>
                      <ProgressBar
                        width={Number(progress)}
                        customstyles="position: inherit; height: 15px; background-color: rgb(7, 133, 172);"
                      />
                    </FullProgressBar>
                  </React.Fragment>
                )
              )}
            </SkillsBox>
          </InfoBox>
          <InfoBox>
            <Heading2>About me</Heading2>
            <DecoratedUnderline />
            <FlexRows>
              {homeData.personalInfo.about.map(
                (paragraph: string, index: number) => (
                  <Paragraph key={index}>{paragraph}</Paragraph>
                )
              )}
            </FlexRows>
          </InfoBox>
        </InfoCard>
      </PersonalInfo>

      {/* Statistics Section */}
      <Testimonials>
        <StickyImage src={homeData.statistics.bgImage} />
        <TransparentBg>
          <FlexColumns>
            {homeData.statistics.statisticsList.map(
              (
                statistic: {
                  icon: string;
                  title: string;
                  subTitle: string;
                },
                index: number
              ) => (
                <FlexRows key={index}>
                  <SkillIcon className={statistic.icon} />
                  <Heading2>{statistic.title}</Heading2>
                  <DecoratedUnderline />
                  <ProgressTitle>{statistic.subTitle}</ProgressTitle>
                </FlexRows>
              )
            )}
          </FlexColumns>
        </TransparentBg>
      </Testimonials>

      {/* Skills Section */}
      <Skills>
        <FlexRows>
          <Heading1>{homeData.services.heading}</Heading1>
          <Paragraph>{homeData.services.description}</Paragraph>
          <DecoratedUnderline />
          <FlexColumns>
            {homeData.services.servicesList.map(
              (
                service: {
                  icon: string;
                  title: string;
                  description: string;
                },
                index: number
              ) => (
                <SkillCard key={index}>
                  <FlexRows>
                    <SkillIcon className={service.icon} />
                    <Heading1>{service.title}</Heading1>
                    <Paragraph>{service.description}</Paragraph>
                  </FlexRows>
                </SkillCard>
              )
            )}
          </FlexColumns>
        </FlexRows>
      </Skills>

      {/* Testimonials Section */}
      <Testimonials>
        <StickyImage src={homeData.testimonials.bgImage} />
        <TransparentBg>
          <Carousel
            slides={homeData.testimonials.testimonies.map(
              (testimony: {
                image: string;
                title: String;
                description: String;
              }) => (
                <FlexRows>
                  <ProfileImage src={testimony.image} />
                  <Heading2>{testimony.title}</Heading2>
                  <Paragraph>{testimony.description}</Paragraph>
                </FlexRows>
              )
            )}
          ></Carousel>
        </TransparentBg>
      </Testimonials>

      {/* Stacks Section */}
      <Stacks>
        <FlexRows>
          <Heading1>{homeData.projects.heading}</Heading1>
          <Paragraph>{homeData.projects.description}</Paragraph>
          <DecoratedUnderline />
          <FlexColumns>
            {homeData.projects.projectsList.map(
              (
                project: {
                  title: string;
                  image: string;
                  link: {
                    href: string;
                    text: string;
                  };
                  date: string;
                },
                index: number
              ) => (
                <StackCard key={index}>
                  <ImageBox>
                    <StackCardImage src={project.image} />
                  </ImageBox>
                  <StackCardDetails>
                    <SpacedColumns>
                      <StackCardInfo>
                        <Heading2>{project.title}</Heading2>
                        <p>
                          <a href={project.link.href}>{project.link.text}</a> /{" "}
                          {project.date}
                        </p>
                      </StackCardInfo>
                      <IconLink href={project.link.href}>
                        <ButtonIcon className="fas fa-eye" />
                      </IconLink>
                    </SpacedColumns>
                  </StackCardDetails>
                </StackCard>
              )
            )}
          </FlexColumns>
        </FlexRows>
      </Stacks>
    </>
  );
}

export default Home;
