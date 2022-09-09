import styled from "styled-components";

export const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main.black};
  margin: 1em 0;
  opacity: 0.1;
`;
