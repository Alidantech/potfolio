import styled from "styled-components";

export const SkillIcon = styled.span`
  border: 10px solid rgb(7, 153, 172);
  color: rgb(7, 153, 172);
  display: flex;
  font-size: xx-large;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  transition: border-color 1s, background-color 1s;
  border-radius: 70px;
  &:hover {
    border: 10px solid rgb(171, 245, 255);
    background-color: rgb(7, 153, 172);
    color: white;
  }
`;
