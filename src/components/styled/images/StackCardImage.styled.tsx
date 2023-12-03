import { styled } from "styled-components";

export const StackCardImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height:75%;
  overflow: hidden;
`;
