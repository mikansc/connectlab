import { useFetchLocals } from "@hooks";
import { useAppContext, useDevicesContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, InputField, SelectField, ToggleField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";
import { useForm } from "react-hook-form";

export const NewDevice = () => {
  const { modal, status } = useAppContext();
  const { locals } = useFetchLocals();
  const { addDeviceToUser } = useDevicesContext();
  const { register, handleSubmit } = useForm({
    defaultValues: { is_on: true },
  });

  const { name, photoUrl, _id } = modal.data;
  console.log(modal.data._id);
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
            placeholder="Selecione o local..."
            disabled={status.isLoading}
            options={status.isLoading ? ["carregando"] : locals}
          />
          <InputField
            {...register("room")}
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
