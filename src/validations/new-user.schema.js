import * as yup from "yup";
import { validationMessages } from "./utils/validation-messages";

const { required, password, email, phone, number, url, passwordMatch } = validationMessages;

const phoneExp = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;
const zipCodeExp = /[0-9]{5}-?[0-9]{3}/;

const addressSchema = yup.object({
  street: yup.string().required(required),
  number: yup.number().typeError(number).required(required),
  neighborhood: yup.string().required(required),
  city: yup.string().required(required),
  state: yup.string().required(required),
  zipCode: yup.string().matches(zipCodeExp, "Deve conter 8 números").required(required),
});

export const newUserSchema = yup.object({
  fullName: yup.string().required(required),
  phone: yup.string().matches(phoneExp, phone).required(required),
  email: yup.string().email(email).required(required),
  photoUrl: yup.string().url(url).required(required),
  userAddress: addressSchema,
  password: yup.string().min(6, password).required(required),
  confirmPassword: yup
    .string()
    .min(6, password)
    .oneOf([yup.ref("password")], passwordMatch)
    .required(required),
});
