import { axiosInstance } from "./config/axiosInstance";

export const get = (resource, config = {}) => {
  return axiosInstance.get(resource, config);
};

export const post = (resource, config = {}) => {
  return axiosInstance.get(resource, config);
};

export const remove = (resource, config = {}) => {
  return axiosInstance.delete(resource, config);
};

export const httpService = {
  get,
  post,
  delete: remove,
};
