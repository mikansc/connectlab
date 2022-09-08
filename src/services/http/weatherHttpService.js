import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./utils/axiosInstanceFactory";

const baseURL = import.meta.env.VITE_OW_URL;
const apikey = import.meta.env.VITE_WAPI;
const weather = "/data/2.5/weather";

const axiosInstance = axiosInstanceFactory(baseURL);
const httpService = new HttpService(axiosInstance);

export const getWeatherByCityName = async (name) => {
  const query = `?q=${name},BR&appid=${apikey}`;
  const { main } = await httpService.get(URL.concat(weather, query), { baseURL });
  const { temp, temp_min, temp_max, feels_like, humidity } = main;

  return {
    city: name,
    temp,
    tempMin: temp_min,
    tempMax: temp_max,
    feelsLike: feels_like,
    humidity,
  };
};
