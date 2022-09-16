import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./factories/axiosInstanceFactory";
import { weaterAdapter } from "./adapters/weatherAdapter";

const baseURL = import.meta.env.VITE_OW_URL;
const apikey = import.meta.env.VITE_WAPI;
const weather = "/data/2.5/weather";

const axiosInstance = axiosInstanceFactory(baseURL);
const httpService = new HttpService(axiosInstance);

export const getWeatherByCityName = async (name) => {
  const query = `?q=${name},BR&units=metric&lang=pt_br&appid=${apikey}`;
  const response = await httpService.get(baseURL.concat(weather, query), { baseURL });
  return weaterAdapter(response);
};
