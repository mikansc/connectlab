import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main.default};
  display: flex;
`;
