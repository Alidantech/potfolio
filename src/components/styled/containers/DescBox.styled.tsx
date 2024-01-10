import { styled } from "styled-components";

export const DescBox = styled.div`
  height: 60svh;
  width: 90%;
  display: grid;
  overflow: hidden;
  margin: 0 5%;
  grid-template-columns: 30% 40% 10%;
  gap: 10%;
  & div img {
    margin: auto;
    width: 50%;
    height: 55vh;
    border-radius: 3px;
  }
  & div {
    max-width: 100vw;
    align-items: start;
  }
  & div a {
    color: rgb(7, 133, 172);
  }
  & div h2 {
    font-weight: lighter;
  }
  & hr {
    height: 2px;
    border-radius: 0;
  }
  @media screen and (max-width: 900px) {
    padding: 0 10px;
    height: 80vh;
    width: 90%;
    gap: 0;
    display: grid;
    grid-template-columns: initial;
    grid-template-rows: 60% 40% 0%;
    & div img {
      width: 250px;
      height: 250px;
      border-radius: 150px;
      margin: 0;
    }
    & div {
      max-width: 100vw;
      align-items: center;
    }
    & div:last-child{
      display: none;
    }
  }
`;
