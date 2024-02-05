import { styled } from "styled-components";

export const Welcome = styled.section`
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    height: 85vh;
  }
`;
