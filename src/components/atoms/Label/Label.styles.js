import styled from "styled-components";

export const StyledLabel = styled.label`
  margin-bottom: 0.25em;
  font-weight: 700;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.main.default};
`;
