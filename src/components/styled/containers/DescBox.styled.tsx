import { styled } from "styled-components";

export const DescBox = styled.div`
  height: 50svh;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 30% 50% 20%;
  @media screen and (max-width: 900px) {
    padding: 0 10px;
    height: 60svh;
    display: grid;
    grid-template-columns: initial;
    grid-template-rows: 30% 50% 20%;
  }
`;
