import * as yup from "yup";
import { validationMessages } from "./utils/validation-messages";

const { required, email, password } = validationMessages;

export const loginSchema = yup.object({
  username: yup.string().email(email).required(required),
  password: yup.string().min(6, password).required(required),
});
