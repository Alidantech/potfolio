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
  InfoLabel,
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
  Center,
} from "../styled/containers/containers";
import {
  DecoratedUnderline,
  TransparentBg,
} from "../styled/items/items";
import { StackCardImage, ImageBox } from "../styled/images/images";
import { ButtonIcon, SkillIcon } from "../styled/icons/icons";
import { FullProgressBar, ProgressBar } from "../styled/widgets/Widgets";
import { IconButton } from "../styled/buttons/buttons";
import Carousel from "../Carousel";

function Home() {
   const slides = [
       <FlexRows>
         <ProfileImage src="https://picsum.photos/300/300" />
         <Heading2>John Doe</Heading2>
         <Paragraph>
           Developer with strong debugging skills and the ability to identify
           and fix <br /> software bugs efficiently.
         </Paragraph>
       </FlexRows>
     ,
     <FlexRows>
       <ProfileImage src="https://picsum.photos/300/300" />
       <Heading2>Jane Williams</Heading2>
       <Paragraph>
         Developer with strong debugging skills and the ability to identify and
         fix <br /> software bugs efficiently.
       </Paragraph>
     </FlexRows>,
     <FlexRows>
       <ProfileImage src="https://picsum.photos/300/300" />
       <Heading2>Anthony Maina</Heading2>
       <Paragraph>
         Developer with strong debugging skills and the ability to identify and
         fix <br /> software bugs efficiently.
       </Paragraph>
     </FlexRows>,
   ];
  return (
    <>
      <Welcome>
        <Heading1>Welcome to my potfolio</Heading1>
        <DecoratedUnderline />
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
              <Heading2>Skills & Languages</Heading2>

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
            <Heading2>About me</Heading2>
            <DecoratedUnderline />
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
      <Testimonials>
        <StickyImage src="https://picsum.photos/1080" />
        <TransparentBg>
          <FlexColumns>
            <FlexRows>
              <SkillIcon className="fas fa-building" />
              <Heading2>10</Heading2>
              <DecoratedUnderline />

              <ProgressTitle>ORGANISATIONS</ProgressTitle>
            </FlexRows>

            <FlexRows>
              <SkillIcon className="fas fa-users" />
              <Heading2>8</Heading2>
              <DecoratedUnderline />

              <ProgressTitle>CLIENTS</ProgressTitle>
            </FlexRows>

            <FlexRows>
              <SkillIcon className="fas fa-clipboard-list" />
              <Heading2>54</Heading2>
              <DecoratedUnderline />

              <ProgressTitle>JOBS COMPLETED</ProgressTitle>
            </FlexRows>

            <FlexRows>
              <SkillIcon className="fas fa-hourglass" />
              <Heading2>3</Heading2>
              <DecoratedUnderline />

              <ProgressTitle>YEARS EXPERIENCE</ProgressTitle>
            </FlexRows>
          </FlexColumns>
        </TransparentBg>
      </Testimonials>
      <Skills>
        <FlexRows>
          <Heading1>Services Offered</Heading1>
          <Paragraph>I offer the following services</Paragraph>
          <DecoratedUnderline />
          <FlexColumns>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-mobile-alt" />
                <Heading1>Mobile Development</Heading1>
                <Paragraph>
                  Mobile developer with experience in building responsive and
                  user-friendly mobile applications.
                </Paragraph>
              </FlexRows>
            </SkillCard>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-globe" />
                <Heading1>Web Developement</Heading1>
                <Paragraph>
                  Web developer with expertise in building modern and scalable
                  web applications using the latest technologies.
                </Paragraph>
              </FlexRows>
            </SkillCard>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-chart-line" />
                <Heading1>Data Science</Heading1>
                <Paragraph>
                  Data scientist with strong analytical skills and experience in
                  extracting insights from large datasets.
                </Paragraph>
              </FlexRows>
            </SkillCard>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-paint-brush" />
                <Heading1>UI/UX Design</Heading1>
                <Paragraph>
                  UI/UX designer with the ability to create visually appealing
                  and intuitive user interfaces.
                </Paragraph>
              </FlexRows>
            </SkillCard>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-chart-bar" />
                <Heading1>Data Analysis</Heading1>
                <Paragraph>
                  Data analyst with expertise in analyzing and interpreting data
                  to support informed business decisions.
                </Paragraph>
              </FlexRows>
            </SkillCard>
            <SkillCard>
              <FlexRows>
                <SkillIcon className="fas fa-bug" />
                <Heading1>Bug Fixing</Heading1>
                <Paragraph>
                  <Center>
                    Developer with strong debugging skills and the ability to
                    identify and fix software bugs efficiently.
                  </Center>
                </Paragraph>
              </FlexRows>
            </SkillCard>
          </FlexColumns>
        </FlexRows>
      </Skills>
      <Testimonials>
        <StickyImage src="https://picsum.photos/1080" />
        <TransparentBg>
            <Carousel slides={slides} />
        </TransparentBg>
      </Testimonials>
      <Stacks>
        <FlexRows>
          <Heading1>Completed Projects</Heading1>
          <Paragraph>In the last two years</Paragraph>
          <DecoratedUnderline />
          <FlexColumns>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/980" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Organizer</Heading2>
                    <p>
                      <a href="">Mobile App</a> / 18 Jun. 2023
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/1080" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Dev Auto</Heading2>
                    <p>
                      <a href="">Dev Tool</a> / 12 Jan. 2022
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/1180" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Webchat</Heading2>
                    <p>
                      <a href="">Website</a> / 10 Mar. 2023
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/900" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Upcoming AI</Heading2>
                    <p>
                      <a href="">Data Science</a> / 20 Feb. 2023
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/1800" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Sprianto IQ</Heading2>
                    <p>
                      <a href="">Website</a> / 13 Jul. 2023
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
            <StackCard>
              <ImageBox>
                <StackCardImage src="https://picsum.photos/1000" />
              </ImageBox>
              <StackCardDetails>
                <SpacedColumns>
                  <StackCardInfo>
                    <Heading2>Farm AI</Heading2>
                    <p>
                      <a href="">Data Science</a> / 7 Nov. 2023
                    </p>
                  </StackCardInfo>
                  <IconButton>
                    <ButtonIcon className="fas fa-arrow-right" />
                  </IconButton>
                </SpacedColumns>
              </StackCardDetails>
            </StackCard>
          </FlexColumns>
        </FlexRows>
      </Stacks>
    </>
  );
}

export default Home;
