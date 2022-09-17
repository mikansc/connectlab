import styled from "styled-components";

export const StyledHeading = styled.h1`
  text-align: ${({ align }) => align ?? "center"};
  font-weight: 700;
  color: ${({ theme, variant }) => theme.colors[variant].default};
`;

export const StyledText = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.default};
`;

export const StyledErrorMessage = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.02rem;
  padding-top: 0.25em;
  padding-left: 0.5em;
  color: ${({ theme }) => theme.colors.error};
`;
