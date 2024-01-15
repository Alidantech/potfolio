import {
  TexInput,
  TextArea,
  SubmitInput,
} from "../components/styled/inputs/inputs.styled";
import { ContactCard } from '../components/styled/cards/cards';
import { ContactPart } from "../components/styled/sections/sections";

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
