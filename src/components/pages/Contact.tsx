import {
  TexInput,
  TextArea,
  SubmitInput,
} from "../styled/inputs/inputs.styled";
import { ContactCard } from '../styled/cards/cards';
import { ContactPart } from "../styled/sections/sections";

function Contact() {
  
  return (
    <ContactPart>
      <ContactCard>
        <TexInput type="email" />
        <TexInput type="text" />
        <TexInput type="text" />
        <TextArea />
        <SubmitInput type="submit"/>
      </ContactCard>
    </ContactPart>
  );
}

export default Contact;
