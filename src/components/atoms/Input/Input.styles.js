import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5em 1em;
  font-weight: 300;
  font-size: 1.6rem;

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:focus {
    outline: ${({ theme }) => theme.colors.main.default} solid 2px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
