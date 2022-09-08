import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.big};
  overflow: hidden;

  margin-bottom: 1em;
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ bgImg }) => `url(${bgImg})`};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

export const StyledTemperatureContainer = styled.div`
  width: 100%;
  line-height: 1.25;
  display: inline-block;
  text-align: center;
  vertical-align: baseline;
  padding: 1.25em 0;
`;

export const StyledTemperature = styled.span`
  font-size: 6.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.text};
`;

export const StyledTemperatureIcon = styled.span`
  font-size: 3.2rem;
  padding: 0 0.35em;
  color: ${({ theme }) => theme.colors.secondary.text};
`;

export const StyledSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary.text};
`;

export const StyledCityName = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.text};
`;
