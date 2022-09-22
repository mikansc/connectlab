import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  align-items: center;

  padding: 0 0.5em;
  height: 100%;

  border: none;
  outline: none;

  font-family: inherit;
  text-decoration: none;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.text};
  background-color: ${({ $open, theme }) =>
    $open ? theme.colors.main.dark : theme.colors.main.default};
`;

export const StyledNavContainer = styled.nav`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledButtonContainer = styled.div`
  padding: 1em 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light}; ;
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 1em 0;
  text-align: center;

  outline: none;
  border: none;

  font-family: inherit;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  &:disabled {
    color: ${({ theme }) => theme.colors.disabled.background};
  }
`;
