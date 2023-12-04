import { styled } from "styled-components";

export const InfoBox = styled.div`
  height: auto;

  & p {
    font-weight: lighter;
    font-size: 120%;
  }
  & h2 {
    margin: 30px 0 0 0;
    color: rgb(7, 133, 172);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    & p {
      font-size: 110%;
    }
  }
`;
