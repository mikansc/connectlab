import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  margin-bottom: 0.5em;
  padding-left: 0.25em;
  font-weight: 400;
  font-size: 1.15rem;
  color: ${({ theme, color }) => color || theme.colors.main.default};

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.error};
    `}
`;
