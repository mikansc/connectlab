import { useFetchLocals } from "@hooks";
import { useAppContext, useDevicesContext } from "@contexts";
import { Button, Paper, Separator, Title, ButtonGroup } from "@atoms";
import { Avatar, InputField, SelectField, ToggleField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDeviceSchema } from "@validations";

export const NewDevice = () => {
  const { modal, status } = useAppContext();
  const { locals } = useFetchLocals();
  const { addDeviceToUser } = useDevicesContext();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { is_on: true },
    resolver: yupResolver(addDeviceSchema),
  });
  const { errors } = formState;
  const { name, photoUrl, _id } = modal.data;

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
            label="Local"
            {...register("local")}
            error={errors.local?.message}
            placeholder="Selecione o local..."
            disabled={status.isLoading}
            options={status.isLoading ? ["carregando"] : locals}
          />
          <InputField
            {...register("room")}
            error={errors.room?.message}
            label="Cômodo"
            placeholder="Quarto, sala, cozinha, etc..."
          />
          <ToggleField {...register("is_on")} label="Ligado?" />
          <Separator />
          <ButtonGroup>
            <Button disabled={status.isLoading} type="submit">
              Salvar
            </Button>
            <Button onClick={() => modal.close()}>Cancelar</Button>
          </ButtonGroup>
        </form>
      </Paper>
    </StyledContainer>
  );
};
