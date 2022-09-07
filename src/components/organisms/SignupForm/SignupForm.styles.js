import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledFields = styled.div`
  width: 100%;
  margin: 1em 0;
`;

export const StyledRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  column-gap: 1em;
`;

export const Separator = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main.black};
  margin: 1em 0;
  opacity: 0.1;
`;

export const StyledButtons = styled.div`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  justify-content: space-evenly;
`;
