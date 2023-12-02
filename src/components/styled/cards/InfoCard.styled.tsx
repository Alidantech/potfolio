import { styled } from "styled-components";

export const InfoCard = styled.div`
  width: 80vw;
  padding: 5vw 2.5vw;
  border: 1px solid rgba(7, 134, 172, 0.082);
  display: grid;
  gap: 5vw;
  grid-template-columns: 35vw 35vw;
  overflow: hidden;
  text-align: start;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
  }
`;
