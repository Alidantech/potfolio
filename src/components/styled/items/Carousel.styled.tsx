import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Slide = styled.div`
  display: grid;
  grid-template-columns: 100vw 100vw 100vw;
  overflow: hidden;
  width: 300vw;
  height: 100%;
  transition: transform 0.5s ease;
  & div {
    padding: 0 20px;
  }
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Indicator = styled.div<{ $isActive?: Boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "white" : "gray")};
  margin: 0 5px;
  cursor: pointer;
`;
