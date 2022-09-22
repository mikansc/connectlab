import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, color }) => color || theme.colors.white};
  opacity: 0.65;
  z-index: ${({ $zIndex }) => $zIndex - 5};
`;

export const StyledModalContent = styled.div`
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ $zIndex }) => $zIndex};
`;
