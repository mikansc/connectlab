import { httpService } from "./http-service";

const resource = "devices";

export const getAllDevices = async () => {
  return await httpService.get(resource);
};
