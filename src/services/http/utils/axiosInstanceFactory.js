import axios from "axios";

export const axiosInstanceFactory = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  return instance;
};
