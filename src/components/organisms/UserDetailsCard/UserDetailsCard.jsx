import { Button, Paper, Pill, Text, Title } from "@atoms";
import { Avatar, Property } from "@molecules";
import { Link } from "react-router-dom";
import {
  Separator,
  StyledButtons,
  StyledContainer,
  StyledUserDataContainer,
} from "./UserDetailsCard.styles";

export const UserDetailsCard = () => {
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
      <StyledButtons>
        <Button as={Link} to="/">
          Voltar
        </Button>
      </StyledButtons>
    </Paper>
  );
};