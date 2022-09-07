import styled from "styled-components";

export const StyledContainer = styled.span`
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary.light};
  color: ${({ theme }) => theme.colors.secondary.text};
  margin: 0 0.5em;
`;
