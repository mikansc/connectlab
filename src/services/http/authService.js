import { HttpService } from "./httpService";
import { axiosInstanceFactory } from "./factories/axiosInstanceFactory";
import { userLoginResponseAdapter } from "./adapters/userLoginResponseAdapter";

const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axiosInstanceFactory(apiUrl);
const httpService = new HttpService(axiosInstance);

const loginUrl = "auth/login";

export const login = ({ username, password }) => {
  return httpService.post(loginUrl, { email: username, password }).then(({ data }) => {
    return userLoginResponseAdapter(data);
  });
};
