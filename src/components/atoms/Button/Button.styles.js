import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background: ${({ theme }) => theme.colors.main.default};
  color: ${({ theme }) => theme.colors.main.text};
  padding: 1em 2em;
  font-size: 1.25rem;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: opacity 100ms ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`;
