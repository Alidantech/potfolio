import { styled } from "styled-components";

export const SkillCard = styled.div`
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  min-width:  400px;
  margin: 0 0;
  min-height: 300px;
  padding: 2vh 2vw;
  &img{
    
  }
  @media screen and (max-width: 400px) {
    min-width: 75vw;
  }
`;
