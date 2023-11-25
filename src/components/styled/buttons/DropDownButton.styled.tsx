import styled from "styled-components";

export const DropDownButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
