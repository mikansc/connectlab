import * as yup from "yup";
import { validationMessages } from "./utils/validation-messages";

const { required } = validationMessages;

export const addressSchema = yup.object({
  zipCode: yup.string().required(required),
  street: yup.string().required(required),
  number: yup.string().required(required),
  neighborhood: yup.string().required(required),
  city: yup.string().required(required),
  state: yup.string().required(required),
});

export const newUserSchema = yup.object({
  firstName: yup.string().required(required),
  phone: yup.string().required(required),
  email: yup.string().required(required),
  photoUrl: yup.string().required(required),
  password: yup.string().required(required),
  confirmPassword: yup.string().required(required),
  userAddress: addressSchema,
});
