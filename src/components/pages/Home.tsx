import { Welcome } from "../styled/sections/sections";
import { TwoRows, TwoColumns, FlexSpacedColumn } from "../styled/containers/containers";
import { Heading1, SmallParagraph } from "../styled/text/text"; 
import { WelcomeImage } from "../styled/images/images";

function Home() {
 
  return (
    <>
      <Welcome>
        <TwoRows>
          <Heading1>Hello I am PETER IRUNGU</Heading1>
          <SmallParagraph>
            A developer with pasion and commitment. to technology and software
            solutions{" "}
          </SmallParagraph>
        </TwoRows>
        <TwoColumns>
          <WelcomeImage src="https://picsum.photos/400/600" />
          <FlexSpacedColumn>
            <a href="/">Explore</a>
            <p>Driven BY</p>
            <ul>
              <li>Passion</li>
              <li>Passion</li>
            </ul>
            <a href="/">LearnMore</a>
          </FlexSpacedColumn>
        </TwoColumns>
      </Welcome>
    </>
  );
}

export default Home;
