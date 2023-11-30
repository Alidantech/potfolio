import styled from "styled-components";

export const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #0077ff; /* Change the color as needed */
  width: ${(props) => props.width}%;
  transition: width 0.3s ease;
  z-index: 1000;
`;
