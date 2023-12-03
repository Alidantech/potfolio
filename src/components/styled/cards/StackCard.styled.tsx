import { styled } from "styled-components";

export const StackCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  min-width: 450px;
  margin: 0 0;
  height: 350px;
  font-size: smaller;
  overflow: hidden;
  padding-bottom: 20px;

  & span {
    color: rgb(7, 133, 172);
    font-size: large;
    border-radius: 50px;
    border: 2px solid rgb(7, 133, 172);
    padding: 8px 9px;
  }
  & a {
    color: rgb(7, 133, 172);
  }
  &:hover img {
    transform: scale(1.2);
  }
  @media screen and (max-width: 900px) {
    min-width: 40vw;
    max-width: 45vw;
    font-size: xx-small;
    height: 200px;
    & span {
      font-size: smaller;
      padding: 4px 5px;
    }
  }
`;

export const StackCardDetails = styled.div`
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 900px) {
    padding: 10px;
  }

`;

export const StackCardInfo = styled.div`
  width: 80%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  overflow: hidden;
`;
