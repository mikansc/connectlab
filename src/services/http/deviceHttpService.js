import { httpService } from "./httpService";

const resource = "devices";

export const getAllDevices = async () => {
  return await httpService.get(resource);
};
