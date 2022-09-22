import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 60px;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.main.default};
  box-shadow: ${({ theme }) => theme.shadow.big};
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 2em;
  }
`;
