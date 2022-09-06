import { axiosInstance } from "./axiosInstance";

export const get = (resource) => {
  return axiosInstance.get(resource);
};

export const post = (resource) => {
  return axiosInstance.get(resource);
};

export const remove = (resource) => {
  return axiosInstance.delete(resource);
};

export const httpService = {
  get,
  post,
  delete: remove,
};
