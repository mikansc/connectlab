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
