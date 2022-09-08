import sunImg from "./assets/img/sun.png";
import cloudyImg from "./assets/img/cloudy.png";
import mistImg from "./assets/img/mist.png";
import rainImg from "./assets/img/rain.png";

import {
  StyledBackground,
  StyledCityName,
  StyledContainer,
  StyledSubContainer,
  StyledTemperature,
  StyledTemperatureContainer,
} from "./WeatherHero.styles";

import { Icon } from "@atoms";
import { Property } from "@molecules";

function getWeatherImg(weatherId) {
  // Mapeando imagens do weatherAPI
  // 200 - 699: chuva rainImg
  // 700 - 799: neblina mistImg
  // 800: sol sunImg
  // 801 - 804: nuvens cloudyImg
  if (weatherId >= 200 && weatherId < 700) return rainImg;
  if (weatherId >= 700 && weatherId < 800) return mistImg;
  if (weatherId === 800) return sunImg;
  if (weatherId > 800) return cloudyImg;
}

function getWeatherIcon(weatherId) {
  // Mapeando imagens do weatherAPI
  // 200 - 699: chuva rainImg
  // 700 - 799: neblina mistImg
  // 800: sol sunImg
  // 801 - 804: nuvens cloudyImg
  /* cloud, water_drop, foggy, sunny */
  if (weatherId >= 200 && weatherId < 700) return "water_drop";
  if (weatherId >= 700 && weatherId < 800) return "foggy";
  if (weatherId === 800) return "sunny";
  if (weatherId > 800) return "cloud";
}

const mockWeatherId = () => Math.min(Math.floor(200 + Math.random() * 1000), 804);

export const WeatherHero = () => {
  const weather = mockWeatherId();

  return (
    <StyledContainer>
      <StyledBackground bgImg={getWeatherImg(weather)}>
        <StyledTemperatureContainer>
          <StyledTemperature>15 °C</StyledTemperature>
          <StyledSubContainer>
            <Property title="min">12 °C</Property>
            <Property title="max">19 °C</Property>
          </StyledSubContainer>
        </StyledTemperatureContainer>
        <Icon size="3rem" name={getWeatherIcon(weather)} />
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
