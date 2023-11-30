import { styled } from "styled-components";

export const AnimatedIcon = styled.img.attrs<{ move: number }>((props) => ({
  style: {
    left: `${props.move - 10}%`,
  },
}))`
  width: auto;
  top: -10%;
  transition: left 0.3s;
  left: -10%;
  position: absolute;
`;
