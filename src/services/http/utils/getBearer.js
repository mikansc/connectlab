import { storageService } from "@services";

export const getBearer = () => {
  const token = storageService.get("usr")?.accessToken;
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
};
