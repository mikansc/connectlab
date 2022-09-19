import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledFields = styled.form`
  width: 100%;
  margin: 1em 0;
`;

export const StyledButtonContainer = styled.div`
  margin: 1em 0;
  align-self: flex-end;
`;

export const StyledRow = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => Math.min(columns, 2)}, 1fr);
    column-gap: 1em;
  }

  @media screen and (min-width: 870px) {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
    column-gap: 1em;
  }
`;
