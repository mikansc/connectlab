import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useFetchAddress, useUserService } from "@hooks";
import { Button, Paper, Separator, Title, ButtonGroup } from "@atoms";
import { InputField } from "@molecules";
import { newUserSchema } from "@validations";

import { StyledFields, StyledContainer, StyledRow, StyledButtonContainer } from "./UserForm.styles";
import { useTranslation } from "react-i18next";

const initial_data = {
  email: "",
  password: "",
  passwordConfirm: "",
  fullName: "",
  photoUrl: "",
  phone: "",
  userAddress: {
    zipCode: "",
    street: "",
    number: null,
    neighborhood: "",
    city: "",
    state: "",
    complement: "",
  },
};

const formConfig = {
  defaultValues: initial_data,
  resolver: yupResolver(newUserSchema),
};

export const UserCreateForm = () => {
  const { t } = useTranslation();
  const { registerUser } = useUserService();
  const { register, handleSubmit, setValue, getValues, formState } = useForm(formConfig);
  const { errors } = formState;

  const { findByCep } = useFetchAddress({
    onFound: (address) => setValue("userAddress", address),
  });

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">{t("heading.add_user")}</Title>
        <StyledFields onSubmit={handleSubmit(registerUser)}>
          <Title as="h3" align="left">
            {t("heading.user_data")}
          </Title>
          <StyledRow>
            <InputField
              {...register("fullName")}
              label={t("user.fullName")}
              placeholder={t("user.fullName_placeholder")}
              error={errors.fullName?.message}
            />
            <InputField
              {...register("phone")}
              label={t("user.phone")}
              placeholder={t("user.phone_placeholder")}
              error={errors.phone?.message}
            />
          </StyledRow>

          <StyledRow>
            <InputField
              {...register("email")}
              label={t("user.email")}
              placeholder={t("user.email_placeholder")}
              error={errors.email?.message}
            />

            <InputField
              {...register("photoUrl")}
              label={t("user.photoUrl")}
              placeholder={t("user.photoUrl_placeholder")}
              error={errors.photoUrl?.message}
            />
          </StyledRow>

          <StyledRow>
            <InputField
              {...register("password")}
              type="password"
              label={t("user.password")}
              placeholder={t("user.password_placeholder")}
              error={errors.password?.message}
            />
            <InputField
              {...register("passwordConfirm")}
              type="password"
              label={t("user.passwordConfirm")}
              placeholder={t("user.passwordConfirm_placeholder")}
              error={errors.passwordConfirm?.message}
            />
          </StyledRow>

          <Separator />

          <Title as="h3" align="left">
            {t("heading.user_address")}
          </Title>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.zipCode")}
              label={t("user.address.zip_code")}
              placeholder={t("user.address.zip_code_placeholder")}
              error={errors.userAddress?.zipCode?.message}
            />
            <StyledButtonContainer>
              <Button type="button" onClick={() => findByCep(getValues("userAddress.zipCode"))}>
                {t("button.search")}
              </Button>
            </StyledButtonContainer>
          </StyledRow>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.street")}
              label={t("user.address.street")}
              placeholder={t("user.address.street_placeholder")}
              error={errors.userAddress?.street?.message}
            />
            <InputField
              {...register("userAddress.number")}
              label={t("user.address.number")}
              placeholder={t("user.address.number_placeholder")}
              error={errors.userAddress?.number?.message}
            />
            <InputField
              {...register("userAddress.compliment")}
              label={t("user.address.compliment")}
              placeholder={t("user.address.compliment_placeholder")}
              error={errors.userAddress?.compliment?.message}
            />
          </StyledRow>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.neighborhood")}
              label={t("user.address.neighborhood")}
              placeholder={t("user.address.neighborhood_placeholder")}
              error={errors.userAddress?.neighborhood?.message}
            />
            <InputField
              {...register("userAddress.city")}
              label={t("user.address.city")}
              placeholder={t("user.address.city_placeholder")}
              error={errors.userAddress?.city?.message}
            />
            <InputField
              {...register("userAddress.state")}
              label={t("user.address.state")}
              placeholder={t("user.address.state_placeholder")}
              error={errors.userAddress?.state?.message}
            />
          </StyledRow>
          <Separator />
          <ButtonGroup>
            <Button type="submit">{t("button.sign_up")}</Button>
            <Button as={Link} to="/dashboard">
              {t("button.cancel")}
            </Button>
          </ButtonGroup>
        </StyledFields>
      </Paper>
    </StyledContainer>
  );
};
