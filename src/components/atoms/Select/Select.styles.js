import styled, { css } from "styled-components";

export const StyledInputSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5em 1em;
  font-weight: 300;
  font-size: 1.6rem;

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:focus {
    outline: ${({ theme }) => theme.colors.main.default} solid 2px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border: 2px solid ${theme.colors.error};
      &:focus {
        outline: ${theme.colors.error} solid 1px;
      }
    `}
`;
