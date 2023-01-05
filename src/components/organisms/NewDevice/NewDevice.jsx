import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { useFetchLocals } from "@hooks";
import { useAppContext, useDevicesContext } from "@contexts";
import { Button, Paper, Separator, Title, ButtonGroup } from "@atoms";
import { Avatar, InputField, SelectField, ToggleField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";
import { addDeviceSchema } from "@validations";

export const NewDevice = () => {
  const { modal, status } = useAppContext();
  const { locals } = useFetchLocals();
  const { addDeviceToUser } = useDevicesContext();
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { is_on: true },
    resolver: yupResolver(addDeviceSchema),
  });
  const { errors } = formState;
  const { name, photoUrl, _id } = modal.data;

  const loadingText = t("misc.loading");

  return (
    <StyledContainer>
      <Paper>
        <form onSubmit={handleSubmit(addDeviceToUser)}>
          <StyledCenteredAvatar>
            <Avatar imageUrl={photoUrl} name={name} size="large" />
          </StyledCenteredAvatar>
          <Title as="h3">{name}</Title>
          <Separator />
          <input type="hidden" {...register("device", { value: _id })} />
          <SelectField
            label={t("input.local")}
            {...register("local")}
            error={errors.local?.message}
            placeholder={t("input.local_placeholder")}
            disabled={status.isLoading}
            options={status.isLoading ? [loadingText] : locals}
          />
          <InputField
            {...register("room")}
            error={errors.room?.message}
            label={t("input.room")}
            placeholder={t("input.room_placeholder")}
          />
          <ToggleField {...register("is_on")} label={t("question.is_on")} />
          <Separator />
          <ButtonGroup>
            <Button disabled={status.isLoading} type="submit">
              {t("button.save")}
            </Button>
            <Button onClick={() => modal.close()}>{t("button.cancel")}</Button>
          </ButtonGroup>
        </form>
      </Paper>
    </StyledContainer>
  );
};
