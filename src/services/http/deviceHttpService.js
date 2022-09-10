import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./utils/axiosInstanceFactory";

const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axiosInstanceFactory(apiUrl);
const httpService = new HttpService(axiosInstance);

const devices = "/devices";
const user = "/users";

export const getAllDevices = async () => {
  return await httpService.get(devices);
};

export const getUserDevices = (userId) => {
  return httpService.get(`${user}/${userId + devices}`).then((res) => res.data);
};
