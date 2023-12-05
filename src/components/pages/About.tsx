import { InfoCard } from "../styled/cards/InfoCard.styled";
import { FlexRows } from "../styled/containers/FlexRows.styled";
import { InfoBox } from "../styled/containers/InfoBox.styled";
import { InfoList } from "../styled/containers/InfoList.syled";
import { ListItem } from "../styled/containers/ListItem.styled";
import { ProfileBox } from "../styled/containers/ProfileBox.styled";
import { SkillsBox } from "../styled/containers/SkillsBox.styled";
import { ProfileImage } from "../styled/images/ProfileImage.syled";
import { DecoratedUnderline } from "../styled/items/DecoratedUnderline.styled";
import { PersonalInfo } from "../styled/sections/PesonalInfo.styled";
import { Heading2 } from "../styled/text/Heading2.styled";
import { InfoData } from "../styled/text/InfoData.styled";
import { Paragraph } from "../styled/text/Paragraph.styled";
import { FullProgressBar, ProgressBar } from "../styled/widgets/ProgressBar.styled";


function About() {
  
  return (
    <PersonalInfo>
      <InfoCard>
        <InfoBox>
          <ProfileBox>
            <ProfileImage src="https://picsum.photos/300/300" />
            <InfoList>
              <ListItem>
                <InfoData>Peter Irungu</InfoData>
              </ListItem>
              <ListItem>
                <InfoData>Software Developer</InfoData>
              </ListItem>
              <ListItem>
                <InfoData>Data Scientist</InfoData>
              </ListItem>
              <ListItem>
                <InfoData>Web Developer</InfoData>
              </ListItem>
            </InfoList>
          </ProfileBox>
          <SkillsBox>
            <Heading2>Skills & Languages</Heading2>

            <Paragraph>Java</Paragraph>
            <FullProgressBar>
              <ProgressBar
                width={98}
                customstyles="position: inherit; height: 15px; background-color: rgb(7, 133, 172);"
              />
            </FullProgressBar>

            <Paragraph>Python</Paragraph>
            <FullProgressBar>
              <ProgressBar
                width={75}
                customstyles="position: inherit; height: 15px; background-color: rgb(7, 133, 172);"
              />
            </FullProgressBar>

            <Paragraph>Typescript/Js</Paragraph>
            <FullProgressBar>
              <ProgressBar
                width={95}
                customstyles="position: inherit; height: 15px; background-color: rgb(7, 133, 172);"
              />
            </FullProgressBar>

            <Paragraph>Dart</Paragraph>
            <FullProgressBar>
              <ProgressBar
                width={89}
                customstyles="position: inherit; height: 15px; background-color: rgb(7, 133, 172);"
              />
            </FullProgressBar>
          </SkillsBox>
        </InfoBox>
        <InfoBox>
          <Heading2>About me</Heading2>
          <DecoratedUnderline />
          <FlexRows>
            <Paragraph>
              Hello, my name is Peter. I am a passionate web developer and
              software engineer based in Kenya. With a strong foundation in
              programming and a keen eye for design, I strive to create engaging
              and user-friendly web applications.
            </Paragraph>

            <Paragraph>
              My journey in the world of technology began on 2021. Over the
              years, I have gained expertise in Web Development, allowing me to
              tackle a variety of projects with confidence and efficiency.
            </Paragraph>

            <Paragraph>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying some quality
              time with my Music and Reading. I believe in continuous learning
              and am always excited to take on new challenges in the
              ever-evolving landscape of web development.
            </Paragraph>
          </FlexRows>
        </InfoBox>
      </InfoCard>
    </PersonalInfo>
  );
}

export default About;
