import { styled } from "styled-components";

export const Welcome = styled.section`
  height: 90svh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  background: rgb(7, 133, 172); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f2fcfe,
    rgb(7, 133, 172)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f2fcfe,
    rgb(7, 133, 172)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
