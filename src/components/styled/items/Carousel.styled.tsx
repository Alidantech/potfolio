import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div`
  display: flex;
  overflow: hidden;
  min-width: 100vw;
  height: 100%;
  transition: transform 0.5s ease;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Indicator = styled.div<{ $isActive?: Boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "blue" : "gray")};
  margin: 0 5px;
  cursor: pointer;
`;
