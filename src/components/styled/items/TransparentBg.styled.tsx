import { styled } from "styled-components";

export const TransparentBg = styled.div`
  height: auto;
  width: 100%;
  padding: 5vh 2vw;
  color: white;
  background-color: rgba(7, 134, 172, 0.884);
  & span {
    color: white;
    border-color: white;
  }
  & p {
    font-size: smaller;
  }
  & hr {
    background-color: white;
    height: 5px;
    width: 2vw;
    margin: 0;
  }
  &:hover hr {
    width: 7vw;
  }
`;
