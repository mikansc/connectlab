import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const { user } = useAuthContext();
  const { weather, status, unit } = useWeather(user.userAddress.city);

  if (!weather || status.isLoading) return <StyledContainer>Carregando...</StyledContainer>;

  const tempValue = t("weather.temperature_value", { value: weather.temp, unit });
  const minTempValue = t("weather.minTemperature_value", { value: weather.tempMin, unit });
  const maxTempValue = t("weather.maxTemperature_value", { value: weather.tempMax, unit });
  const thermSensValue = t("weather.thermalSensation_value", { value: weather.feelsLike, unit });
  const humidityValue = t("weather.humidity_value", { value: weather.humidity });
  const updatedDateValue = Intl.DateTimeFormat(i18n.language, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(weather.date * 1000);

  return (
    <StyledContainer>
      <StyledBackground bgImg={getWeatherImg(weather.weatherId)}>
        <StyledTemperatureContainer>
          <StyledTemperature>{tempValue}</StyledTemperature>
          <StyledSubContainer>
            <Property title="min">{minTempValue}</Property>
            <Property title="max">{maxTempValue}</Property>
          </StyledSubContainer>
        </StyledTemperatureContainer>
        <StyledCityContainer>
          <StyledCityName>{weather.city}</StyledCityName>
          <Icon size="3rem" name={getWeatherIcon(weather.weatherId)} />
        </StyledCityContainer>
        <StyledWeatherDataContainer>
          <Property title={t("weather.thermal_sensation")}>{thermSensValue}</Property>
          <span> | </span>
          <Property title={t("weather.humidity")}>{humidityValue}</Property>
          <span> | </span>
          <Property title={t("weather.updated_at")}>{updatedDateValue}</Property>
        </StyledWeatherDataContainer>
      </StyledBackground>
    </StyledContainer>
  );
};

// function toCelsius(temperature) {
//   return new Intl.NumberFormat("pt-BR", { unit: "celsius", style: "unit" }).format(temperature);
// }

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
