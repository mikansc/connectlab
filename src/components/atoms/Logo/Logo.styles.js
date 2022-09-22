import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;

  & img {
    display: block;
    width: 100%;
  }

  @media screen and (${({ theme }) => theme.breakpoints.medium}) {
    width: 140px;
    padding: 0 2em;
  }
`;
