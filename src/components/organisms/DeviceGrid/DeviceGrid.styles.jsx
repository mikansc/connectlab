import styled from "styled-components";

export const StyledGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 1em;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;

    & > * {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
`;
