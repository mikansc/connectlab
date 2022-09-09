import { Link } from "react-router-dom";

import { Button, Paper, Pill, Separator, Text, Title } from "@atoms";
import { Avatar, ButtonGroup, Property } from "@molecules";

import { StyledContainer, StyledUserDataContainer } from "./UserDetails.styles";

export const UserDetails = () => {
  return (
    <Paper>
      <Title as="h2">Perfil do usuário</Title>
      <StyledContainer>
        <Avatar size="large" imageUrl="https://github.com/mikansc.png" name="Michael" />
        <StyledUserDataContainer>
          <Title as="h4" align="left">
            Michael Nascimento
          </Title>
          <Text>michael@email.com - (99) 9999-9999</Text>
        </StyledUserDataContainer>
      </StyledContainer>

      <Separator />
      <Title as="h3" align="left">
        Endereço
      </Title>
      <Property title="Endereço" value="Rua 123" />
      <Property title="Complemento" value="Casa" />
      <Property title="Bairro" value="Jardim alguma coisa" />
      <Property title="Cidade" value="Joinville" />
      <Property title="UF" value="Santa Catarina" />

      <Separator />
      <Title as="h3" align="left">
        Ambientes
      </Title>
      <Property title="Casa">
        <Pill>Quarto</Pill>
      </Property>
      <ButtonGroup>
        <Button as={Link} to="/">
          Voltar
        </Button>
        <Button as={Link} to="/dashboard/profile/edit">
          Editar
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
