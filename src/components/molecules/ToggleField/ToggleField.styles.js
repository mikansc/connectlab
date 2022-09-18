import { StyledLabel } from "@atoms/Label/Label.styles";
import styled, { css } from "styled-components";

export const StyledInputGroup = styled.div`
  display: flex;
  margin: 1em 0;
`;

export const StyledToggleLabel = styled(StyledLabel)`
  display: flex;
  align-items: center;
  font-weight: 300;

  & > * {
    margin-left: 0.5em;
  }

  color: ${({ theme, color }) => color || theme.colors.main.default};

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.error};
    `}
`;
