import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./utils/axiosInstanceFactory";
import { getBearer } from "./utils/getBearer";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axiosInstanceFactory(apiUrl);
axiosInstance.interceptors.request.use((config) => {
  config.headers.common = { ...config.headers.common, ...getBearer() };
  return config;
});

const httpService = new HttpService(axiosInstance);

const usersUrl = "/users";

export const updateUser = (id, user) => {
  if (!id) {
    console.error("ID do usuário não informado");
    return Promise.reject(new Error("Erro na requisição!"));
  }
  return httpService.put(`${usersUrl}/${id}`, user).then(({ data: user }) => {
    return { ...user, userAddress: user.userAddress, id: user._id };
  });
};
