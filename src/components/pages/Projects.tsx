import { IconButton } from "../styled/buttons/IconButton.styled";
import { StackCard, StackCardDetails, StackCardInfo } from "../styled/cards/StackCard.styled";
import { FlexColumns } from "../styled/containers/FlexColumns.styled";
import { FlexRows } from "../styled/containers/FlexRows.styled";
import { SpacedColumns } from "../styled/containers/SpacedColumns.styled";
import { ButtonIcon } from "../styled/icons/ButtonIcon.styled";
import { ImageBox, StackCardImage } from "../styled/images/StackCardImage.styled";
import { DecoratedUnderline } from "../styled/items/DecoratedUnderline.styled";
import { Stacks } from "../styled/sections/Stacks.styled";
import { Heading1 } from "../styled/text/Heading1.styled";
import { Heading2 } from "../styled/text/Heading2.styled";
import { Paragraph } from "../styled/text/Paragraph.styled";



function Projects() {
 
  return (
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
  );

}

export default Projects;
