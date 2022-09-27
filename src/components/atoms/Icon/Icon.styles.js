import styled from "styled-components";

export const StyledSpan = styled.span`
  font-size: ${({ size }) => size || "inherit"};
  color: ${({ theme, $color }) => $color || theme.colors.main.text};
`;
