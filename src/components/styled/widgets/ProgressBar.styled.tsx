// Widgets.tsx
import styled, { css } from "styled-components";

interface ProgressBarProps {
  width: number;
  customstyles?: string;
}

export const ProgressBar = styled.div.attrs<ProgressBarProps>((props) => ({
  style: {
    width: `${props.width}%`,
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #0077ff;
  transition: width 0.3s ease;
  z-index: 1000;
  ${(props) =>
    props.customstyles &&
    css`
      ${props.customstyles}
    `}
`;

