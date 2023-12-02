import { styled } from "styled-components";

export const StackCardImage = styled.img`
  width: 100%;
  height: 80%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out; 
  &:hover {
    transform: scale(
      1.2
    ); 
    max-height: 80%; 
  }
`;
