import styled, { css } from "styled-components";

const applyDisabledStyles = (theme) => {
  return css`
    cursor: not-allowed;

    background: ${theme.colors.disabled.background};
    color: ${theme.colors.disabled.text};

    &:hover {
      opacity: 1;
    }
  `;
};

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.main.default};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  padding: 1em 2em;

  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity 100ms ease-in-out;

  background: ${({ theme }) => theme.colors.main.default};
  color: ${({ theme }) => theme.colors.main.text};
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  ${({ theme, disabled }) => disabled && applyDisabledStyles(theme)}
`;
