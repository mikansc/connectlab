import { useWeather } from "@hooks";
import { useAuthContext } from "@contexts";
import { Icon } from "@atoms";
import { Property } from "@molecules";

import {
  StyledBackground,
  StyledCityContainer,
  StyledCityName,
  StyledContainer,
  StyledSubContainer,
  StyledTemperature,
  StyledTemperatureContainer,
  StyledWeatherDataContainer,
} from "./WeatherHero.styles";

import sunImg from "./assets/img/sun.png";
import cloudyImg from "./assets/img/cloudy.png";
import mistImg from "./assets/img/mist.png";
import rainImg from "./assets/img/rain.png";

export const WeatherHero = () => {
  const { user } = useAuthContext();
  const { weather, status } = useWeather(user.userAddress.city);

  if (!weather || status.isLoading) return <StyledContainer>Carregando...</StyledContainer>;

  return (
    <StyledContainer>
      <StyledBackground bgImg={getWeatherImg(weather.weatherId)}>
        <StyledTemperatureContainer>
          <StyledTemperature>{weather.temp} °C</StyledTemperature>
          <StyledSubContainer>
            <Property title="min">{weather.tempMin} °C</Property>
            <Property title="max">{weather.tempMax} °C</Property>
          </StyledSubContainer>
        </StyledTemperatureContainer>
        <StyledCityContainer>
          <StyledCityName>{weather.city}</StyledCityName>
          <Icon size="3rem" name={getWeatherIcon(weather.weatherId)} />
        </StyledCityContainer>
        <StyledWeatherDataContainer>
          <Property title="Sensação térmica">{weather.feelsLike} °C</Property>
          <span> | </span>
          <Property title="Umidade do ar">{weather.humidity} %</Property>
          <span> | </span>
          <Property title="Atualizado em">
            {Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(
              weather.date * 1000,
            )}
          </Property>
        </StyledWeatherDataContainer>
      </StyledBackground>
    </StyledContainer>
  );
};

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
  // 200 - 699: chuva water_drop
  // 700 - 799: neblina foggy ou lens_blur
  // 800: sol sunny
  // 801 - 804: nuvens cloud
  if (weatherId >= 200 && weatherId < 700) return "water_drop";
  if (weatherId >= 700 && weatherId < 800) return "lens_blur";
  if (weatherId === 800) return "sunny";
  if (weatherId > 800) return "cloud";
}
