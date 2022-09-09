import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(720deg); }
`;

export const StyledSpinner = styled.div`
  border: 6px solid ${({ theme }) => theme.colors.main.light};
  border-radius: 50%;
  border-left: 6px solid ${({ theme }) => theme.colors.main.default};
  border-right: 6px solid ${({ theme }) => theme.colors.main.default};
  width: 40px;
  height: 40px;
  margin: 6px auto;
  animation: ${rotate} 1.8s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
`;
