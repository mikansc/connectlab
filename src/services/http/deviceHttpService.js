import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./factories/axiosInstanceFactory";
import { getBearer } from "./utils/getBearer";

const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axiosInstanceFactory(apiUrl);

axiosInstance.interceptors.request.use((config) => {
  config.headers.common = { ...config.headers.common, ...getBearer() };
  return config;
});

const httpService = new HttpService(axiosInstance);

const devices = "/devices";
const user = "/user";
const userDevices = "/userDevices";

export const getAllDevices = async () => {
  return await httpService.get(devices).then((res) => res.data);
};

export const getUserDevices = (userId) => {
  return httpService.get(`${userDevices + user}/${userId}`).then((res) => res.data);
};

export const addDeviceToUser = (device) => {
  return httpService.post(`${userDevices}`, device).then((res) => res.data);
};
