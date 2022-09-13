import { HttpService } from "./httpService";
import { addressAdapter } from "./utils/addressAdapter";
import { axiosInstanceFactory } from "./utils/axiosInstanceFactory";

const apiUrl = import.meta.env.VITE_VIACEP_URL;
const axiosInstance = axiosInstanceFactory(apiUrl);
const httpService = new HttpService(axiosInstance);

export const getAddressByZipCode = (zipcode) => {
  if (!zipcode) Promise.reject(new Error("No zip code was informed"));
  return httpService.get(`/ws/${zipcode}/json`).then((res) => addressAdapter(res.data));
};
