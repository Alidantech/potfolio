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
  /* background: rgb(7, 133, 172);
  background: -webkit-linear-gradient(to top, #f2fcfe, rgb(7, 133, 172));
  background: linear-gradient(to top, #f2fcfe, rgb(7, 133, 172));
  /* background: url("https://picsum.photos/1080"); */
  /*background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat; 
  color: white;*/
  @media screen and (max-width: 900px) {
    height: 85vh;
  }
`;
