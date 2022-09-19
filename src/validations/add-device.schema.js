import * as yup from "yup";
import { validationMessages } from "./utils/validation-messages";

const { required } = validationMessages;

export const addDeviceSchema = yup.object({
  local: yup.string().required(required),
  room: yup.string().required(required),
});
