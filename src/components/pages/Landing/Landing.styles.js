import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

export const StyledLeftContent = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.main.default};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 100%;
  }
`;

export const StyledRightContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledLogoWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.colors.main.default};
  opacity: 0.9;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: initial;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    opacity: 1;
  }
`;

export const StyledFormWrapper = styled.div`
  width: 95%;
  margin: -3rem auto;
  height: calc(100% - 80px);
  display: grid;
  place-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;
