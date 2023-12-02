import {
  Welcome,
  PersonalInfo,
  Skills,
  Stacks,
  Testimonials,
} from "../styled/sections/sections";
import { ProfileImage } from "../styled/images/images";
import { Heading1, Paragraph, InfoData, InfoLabel } from "../styled/text/text";
import { StackCard, InfoCard, SkillCard } from "../styled/cards/cards";
import {
  FlexColumns,
  FlexRows,
  ListItem,
  InfoList,
  InfoBox,
  SkillsBox,
  ProfileBox
} from "../styled/containers/containers";
import { SkillIcon } from "../styled/icons/icons";
import { FullProgressBar, ProgressBar } from "../styled/widgets/Widgets";

function Home() {
  return (
    <>
      <Welcome>
        <Heading1>Welcome to my potfolio</Heading1>
        <Paragraph>I am a web developer and software engineer</Paragraph>
      </Welcome>
      <PersonalInfo>
        <InfoCard>
          <InfoBox>
            <ProfileBox>
              <ProfileImage src="https://picsum.photos/300/300" />
              <InfoList>
                <ListItem>
                  <InfoLabel>Name:</InfoLabel>
                  <InfoData>Peter Irungu</InfoData>
                </ListItem>
                <ListItem>
                  <InfoLabel>Profile:</InfoLabel>
                  <InfoData>Web, Software Developer</InfoData>
                </ListItem>
                <ListItem>
                  <InfoLabel>Email:</InfoLabel>
                  <InfoData>peteralidante254@gmail.com</InfoData>
                </ListItem>
                <ListItem>
                  <InfoLabel>Phone:</InfoLabel>
                  <InfoData>+254748311679</InfoData>
                </ListItem>
              </InfoList>
            </ProfileBox>
            <SkillsBox>
              <h2>Skills & Languages</h2>

              <InfoData>Java</InfoData>
              <FullProgressBar>
                <ProgressBar
                  width={99}
                  customstyles="position: inherit; height: 10px; background-color: rgb(7, 133, 172);"
                />
              </FullProgressBar>

              <InfoData>Python</InfoData>
              <FullProgressBar>
                <ProgressBar
                  width={79}
                  customstyles="position: inherit; height: 10px; background-color: rgb(7, 133, 172);"
                />
              </FullProgressBar>

              <InfoData>Typescript/Js</InfoData>
              <FullProgressBar>
                <ProgressBar
                  width={99}
                  customstyles="position: inherit; height: 10px; background-color: rgb(7, 133, 172);"
                />
              </FullProgressBar>

              <InfoData>Dart</InfoData>
              <FullProgressBar>
                <ProgressBar
                  width={89}
                  customstyles="position: inherit; height: 10px; background-color: rgb(7, 133, 172);"
                />
              </FullProgressBar>
            </SkillsBox>
          </InfoBox>
          <InfoBox>
            <h2>About me</h2>
            <FlexRows>
              <Paragraph>
                Hello, my name is Peter. I am a passionate web developer and
                software engineer based in Kenya. With a strong foundation in
                programming and a keen eye for design, I strive to create
                engaging and user-friendly web applications.
              </Paragraph>

              <Paragraph>
                My journey in the world of technology began on 2021. Over the
                years, I have gained expertise in Web Development, allowing me
                to tackle a variety of projects with confidence and efficiency.
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
      <Skills>
        <Heading1>Services Offered</Heading1>
        <Paragraph>I offer the following services</Paragraph>
        <FlexColumns>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
          <SkillCard>
            <FlexRows>
              <SkillIcon className="fas fa-book" />
              <Heading1>WEB DEVELOPER</Heading1>
              <Paragraph>I want a web developer with <br />
              and skilled well in the field.</Paragraph>
            </FlexRows>
          </SkillCard>
        </FlexColumns>
      </Skills>
      <Stacks>
        <Heading1>My Technology Stacks</Heading1>
        <FlexColumns>
          <StackCard>WEB DEVELOPMENT</StackCard>
          <StackCard>MOBILE DEVELOPMENT</StackCard>
          <StackCard>DATA SCIENCE</StackCard>
        </FlexColumns>
      </Stacks>
      <Testimonials>
        <Heading1>Refferences and testimonials</Heading1>
      </Testimonials>
    </>
  );
}

export default Home;
