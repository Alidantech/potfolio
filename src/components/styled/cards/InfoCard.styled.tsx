import { styled } from "styled-components";

export const InfoCard = styled.div`
  width: 85vw;
  padding: 3.5vw;
  border: 1px solid rgba(7, 134, 172, 0.082);
  display: grid;
  gap: 3vw;
  grid-template-columns: 40vw 40vw;
  overflow: hidden;
  text-align: start;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
  }
`;
