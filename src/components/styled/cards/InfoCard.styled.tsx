import { styled } from "styled-components";

export const InfoCard = styled.div`
  width: 90vw;
  padding: 5vw 2.5vw;
  display: grid;
  gap: 10vw;
  grid-template-columns: 35vw 35vw;
  overflow: hidden;
  text-align: start;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
  }
`;
