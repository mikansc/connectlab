import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0 1em;
  height: 100%;

  cursor: pointer;
  border: none;
  outline: none;

  font-family: inherit;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.text};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.main.dark : theme.colors.main.default};

  transition: background-color 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.main.text};
    background-color: ${({ theme }) => theme.colors.main.light};
  }
`;
