import styled, { keyframes } from "styled-components";

export const DataLoader = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  backdrop-filter: blur(1px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  font-size: 2em;
  color: blue;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const LoaderSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotateAnimation} 1s linear infinite;
`;
