import { Property } from "@molecules";
import sunImg from "./assets/img/sun.png";
import cloudyImg from "./assets/img/cloudy.png";
import rainImg from "./assets/img/rain.png";

import {
  StyledBackground,
  StyledCityName,
  StyledContainer,
  StyledSubContainer,
  StyledTemperature,
  StyledTemperatureContainer,
  StyledTemperatureIcon,
} from "./WeatherHero.styles";
import { Icon } from "@atoms";

export const WeatherHero = () => {
  return (
    <StyledContainer>
      <StyledBackground bgImg={rainImg}>
        <StyledTemperatureContainer>
          <StyledTemperature>15 °C</StyledTemperature>
          <StyledTemperatureIcon>
            <Icon name="cloud" />
          </StyledTemperatureIcon>
          <StyledSubContainer>
            <Property title="min">12 °C</Property>
            <Property title="max">19 °C</Property>
          </StyledSubContainer>
        </StyledTemperatureContainer>
        <StyledCityName>Joinville, SC</StyledCityName>
        <StyledSubContainer>
          <Property title="Sensação térmica">12°C</Property>
          <span> | </span>
          <Property title="Umidade do ar"> 14%</Property>
        </StyledSubContainer>
      </StyledBackground>
    </StyledContainer>
  );
};
