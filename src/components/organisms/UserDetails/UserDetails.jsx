import { Link } from "react-router-dom";

import { Button, Paper, Separator, Text, Title } from "@atoms";
import { Avatar, ButtonGroup, Property } from "@molecules";

import { StyledContainer, StyledUserDataContainer } from "./UserDetails.styles";
import { useAuthContext } from "@contexts";

export const UserDetails = () => {
  const { user } = useAuthContext();

  const { fullName, email, photoUrl, userAddress, phone } = user;
  const { street, number, city, neighborhood, state, zipCode } = userAddress;

  return (
    <Paper>
      <Title as="h2">Perfil do usuário</Title>
      <StyledContainer>
        <Avatar size="large" imageUrl={photoUrl} name={fullName} />
        <StyledUserDataContainer>
          <Title as="h4" align="left">
            {fullName}
          </Title>
          <Text>
            {email} - {phone}
          </Text>
        </StyledUserDataContainer>
      </StyledContainer>

      <Separator />
      <Title as="h3">Endereço</Title>
      <Property title="Endereço" value={street} />
      <Property title="Número" value={number} />
      <Property title="Bairro" value={neighborhood} />
      <Property title="Cidade" value={city} />
      <Property title="Estado" value={state} />
      <Property title="CEP" value={zipCode} />

      <Separator />

      <ButtonGroup>
        <Button as={Link} to="/dashboard">
          Voltar
        </Button>
        <Button as={Link} to="/dashboard/profile/edit">
          Editar
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
