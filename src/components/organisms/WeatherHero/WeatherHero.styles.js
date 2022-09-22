import styled from "styled-components";
import {
  StyledPropertyContainer,
  StyledPropertyTitle,
  StyledPropertyValue,
} from "@molecules/Property/Property.styles";

export const StyledContainer = styled.div`
  width: 100%;
  height: 360px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.big};
  overflow: hidden;
  margin-bottom: 1em;

  @media screen and (${({ theme }) => theme.breakpoints.medium}) {
    height: 280px;
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ bgImg }) => `url(${bgImg})`};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: -2;

  @media screen and (${({ theme }) => theme.breakpoints.medium}) {
    justify-content: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2); // FIXME: color from theme
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

export const StyledSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary.text};
`;

export const StyledCityContainer = styled(StyledSubContainer)`
  & > * {
    margin: 0 0.15em;
  }
  @media screen and (${({ theme }) => theme.breakpoints.medium}) {
    & > * {
      margin: 0.5em 0.15em;
    }
  }
`;

export const StyledCityName = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary.text};

  @media screen and (${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.4rem;
  }
`;

export const StyledWeatherDataContainer = styled(StyledSubContainer)`
  background-color: ${({ theme }) => theme.colors.secondary.default};
  color: ${({ theme }) => theme.colors.secondary.text};

  ${StyledPropertyContainer} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  ${StyledPropertyTitle} {
    font-size: 0.75rem;
  }

  ${StyledPropertyValue} {
    font-size: 1rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.small}) {
    color: ${({ theme }) => theme.colors.secondary.text};

    ${StyledPropertyContainer} {
      width: initial;
      display: block;
      flex-direction: initial;
    }

    ${StyledPropertyTitle} {
      font-size: inherit;
    }

    ${StyledPropertyValue} {
      font-size: inherit;
    }
  }
`;
