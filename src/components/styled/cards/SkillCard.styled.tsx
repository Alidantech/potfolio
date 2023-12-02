import { styled } from "styled-components";

export const SkillCard = styled.div`
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  min-width: 400px;
  margin: 0 0;
  min-height: 300px;
  padding: 2vh 2vw;
  @media screen and (max-width: 400px) {
    min-width: 250px;
  }
`;
