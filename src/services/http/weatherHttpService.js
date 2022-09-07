/* eslint-disable camelcase */

import { httpService } from "./httpService";

const baseURL = import.meta.env.VITE_OW_URL;
const apikey = import.meta.env.VITE_WAPI;

const geo = "/geo/1.0/direct";
const weather = "/data/2.5/weather";

export const getLatLonByCityName = async (name) => {
  const query = `?q=${name},BR&limit=1&appid=${apikey}`;
  const response = await httpService.get(URL.concat(geo, query), { baseURL });
  return { lat: response[0].lat, lon: response[0].lon };
};

export const getWeatherByLatLon = async ({ city, lat, lon }) => {
  const query = `lat=${lat}&lon=${lon}=2&appid=${apikey}`;
  const { main } = await httpService.get(URL.concat(weather, query), { baseURL });
  const { temp, temp_min, temp_max, feels_like, humidity } = main;
  return { city, temp, tempMin: temp_min, tempMax: temp_max, feelsLike: feels_like, humidity };
};
