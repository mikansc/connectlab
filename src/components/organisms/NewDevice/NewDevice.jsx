import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, InputField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";
import { useAppContext } from "@contexts";

export const NewDevice = () => {
  const { modal } = useAppContext();

  const { title, photoUrl } = modal.data;

  return (
    <StyledContainer>
      <Paper>
        <StyledCenteredAvatar>
          <Avatar imageUrl={photoUrl} name={title} size="large" />
        </StyledCenteredAvatar>
        <Title as="h3">{title}</Title>
        <Separator />
        <InputField name="local" label="Local" placeholder="Selecione o local..." />
        <InputField name="comodo" label="Cômodo" placeholder="Selecione o cômodo..." />
        <Separator />
        <ButtonGroup>
          <Button>Salvar</Button>
          <Button onClick={() => modal.close()}>Cancelar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
