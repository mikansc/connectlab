import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./factories/axiosInstanceFactory";
import { getBearer } from "./utils/getBearer";
import { userUpdateResponseAdapter } from "./adapters/userUpdateResponseAdapter";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axiosInstanceFactory(apiUrl);
axiosInstance.interceptors.request.use((config) => {
  config.headers.common = { ...config.headers.common, ...getBearer() };
  return config;
});

const httpService = new HttpService(axiosInstance);

const usersUrl = "/users";
const newUserUrl = "auth/register";

export const createUser = (user) => {
  return httpService.post(newUserUrl, user);
};

export const updateUser = (id, user) => {
  if (!id) {
    console.error("ID do usuário não informado");
    return Promise.reject(new Error("Erro na requisição!"));
  }
  return httpService.put(`${usersUrl}/${id}`, user).then(({ data }) => {
    return userUpdateResponseAdapter(data);
  });
};
