import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./utils/axiosInstanceFactory";
import { getBearer } from "./utils/getBearer";
import { localsAdapter } from "./utils/localsAdapter";

const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axiosInstanceFactory(apiUrl);

axiosInstance.interceptors.request.use((config) => {
  config.headers.common = { ...config.headers.common, ...getBearer() };
  return config;
});

const httpService = new HttpService(axiosInstance);

const locals = "/locals";

export const getAllLocals = async () => {
  return await httpService.get(locals).then((a) => {
    console.log(a);
    return localsAdapter(a.data);
  });
};
