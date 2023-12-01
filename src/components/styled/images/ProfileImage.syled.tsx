import { styled } from "styled-components";

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 20px;
  background-clip: content-box;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    width: 45vw;
    height: 45vw;
  }
`;
