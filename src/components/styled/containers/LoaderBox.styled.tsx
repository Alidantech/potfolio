import { styled } from "styled-components";

export const LoaderBox = styled.div`
  width: 20%;
  position: relative;
  min-height: 20dvh;
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 40%;
  }
`;
