import { useFetchLocals } from "@hooks";
import { useAppContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, InputField, SelectField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";

export const NewDevice = () => {
  const { modal } = useAppContext();
  const { locals, isLoading } = useFetchLocals();

  const { name, photoUrl } = modal.data;

  return (
    <StyledContainer>
      <Paper>
        <StyledCenteredAvatar>
          <Avatar imageUrl={photoUrl} name={name} size="large" />
        </StyledCenteredAvatar>
        <Title as="h3">{name}</Title>
        <Separator />
        <SelectField
          label="Local"
          name="name"
          placeholder="Selecione o local..."
          disabled={isLoading}
          options={isLoading ? ["carregando"] : locals}
        />
        <InputField name="comodo" label="Cômodo" placeholder="Quarto, sala, cozinha, etc..." />
        <Separator />
        <ButtonGroup>
          <Button>Salvar</Button>
          <Button onClick={() => modal.close()}>Cancelar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
