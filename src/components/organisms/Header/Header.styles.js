import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main.default};
  box-shadow: ${({ theme }) => theme.shadow.big};
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.dark};
  display: flex;
`;
