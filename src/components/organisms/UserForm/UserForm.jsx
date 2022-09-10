import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Button, Paper, Separator, Title } from "@atoms";
import { ButtonGroup, InputField } from "@molecules";

import { StyledFields, StyledContainer, StyledRow } from "./UserForm.styles";

export const UserForm = ({ title, userData }) => {
  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">{title}</Title>
        <StyledFields>
          <Title as="h3" align="left">
            Dados pessoais
          </Title>
          <StyledRow>
            <InputField
              name="fullName"
              label="Nome completo"
              placeholder="digite seu nome completo..."
            />
            <InputField name="phone" label="Telefone" placeholder="(XX) XXXXX-XXXX" />
          </StyledRow>

          <StyledRow>
            <InputField name="email" label="E-mail" placeholder="usuario@mail.com" />

            <InputField
              name="photoUrk"
              label="URL da foto"
              placeholder="insira a url da foto de perfil..."
            />
          </StyledRow>

          <StyledRow>
            <InputField
              name="password"
              type="password"
              label="Senha"
              placeholder="digite sua senha..."
            />
            <InputField
              name="passwordConfirm"
              type="password"
              label="Confirme a senha"
              placeholder="digite sua senha novamente..."
            />
          </StyledRow>

          <Separator />

          <Title as="h3" align="left">
            Endereço
          </Title>
          <StyledRow columns="3">
            <InputField name="cep" label="CEP" placeholder="XXXXX-XXX" />
          </StyledRow>
          <StyledRow>
            <InputField
              name="address1"
              label="Logradouro / Endereço"
              placeholder="digite o endereço com número..."
            />
            <InputField name="address2" label="Bairro" placeholder="digite o bairro..." />
          </StyledRow>
          <StyledRow>
            <InputField name="city" label="Cidade" placeholder="digite a cidade..." />
            <InputField name="state" label="Estado" placeholder="digite o estado..." />
          </StyledRow>

          <Separator />

          <Title as="h3" align="left">
            Identificação do local
          </Title>
          <StyledRow>
            <InputField name="local.type" label="Tipo de local" placeholder="escolha..." />
            <InputField name="local.rooms" label="Cômodo" placeholder="escolha..." />
          </StyledRow>
        </StyledFields>
        <ButtonGroup>
          <Button onClick={() => {}}>Cadastrar</Button>
          <Button as={Link} to="/dashboard">
            Cancelar
          </Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};

UserForm.propTypes = {
  title: PropTypes.string.isRequired,
  userData: PropTypes.object,
};
