import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useFetchAddress } from "@hooks";
import { useAuthContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { ButtonGroup, InputField } from "@molecules";

import {
  StyledFields,
  StyledContainer,
  StyledRow,
  StyledButtonContainer,
} from "./UserUpdateForm.styles";

export const UserUpdateForm = () => {
  const { user } = useAuthContext();

  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: user,
  });

  const { findByCep } = useFetchAddress({
    onFound: (address) => setValue("userAddress", address),
  });

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Atualizar usuário</Title>
        <StyledFields onSubmit={handleSubmit((d) => console.log(d))}>
          <Title as="h3" align="left">
            Dados pessoais
          </Title>
          <StyledRow>
            <InputField
              {...register("fullName")}
              label="Nome completo"
              placeholder="digite seu nome completo..."
            />
            <InputField {...register("phone")} label="Telefone" placeholder="(XX) XXXXX-XXXX" />
          </StyledRow>

          <StyledRow>
            <InputField {...register("email")} label="E-mail" placeholder="usuario@mail.com" />

            <InputField
              {...register("photoUrl")}
              label="URL da foto"
              placeholder="insira a url da foto de perfil..."
            />
          </StyledRow>

          <StyledRow>
            <InputField
              {...register("password")}
              type="password"
              label="Senha"
              placeholder="digite sua senha..."
            />
            <InputField
              {...register("passwordConfirm")}
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
            <InputField {...register("userAddress.zipCode")} label="CEP" placeholder="12345000" />
            <StyledButtonContainer>
              <Button type="button" onClick={() => findByCep(getValues("userAddress.zipCode"))}>
                Buscar
              </Button>
            </StyledButtonContainer>
          </StyledRow>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.street")}
              label="Logradouro / Endereço"
              placeholder="digite o endereço..."
            />
            <InputField
              {...register("userAddress.number")}
              label="Número"
              placeholder="digite o número..."
            />
            <InputField
              {...register("userAddress.neighborhood")}
              label="Bairro"
              placeholder="digite o bairro..."
            />
          </StyledRow>
          <StyledRow>
            <InputField
              {...register("userAddress.city")}
              label="Cidade"
              placeholder="digite a cidade..."
            />
            <InputField
              {...register("userAddress.state")}
              label="Estado"
              placeholder="digite o estado..."
            />
          </StyledRow>
          <Separator />
          <ButtonGroup>
            <Button type="submit">Cadastrar</Button>
            <Button as={Link} to="/dashboard">
              Cancelar
            </Button>
          </ButtonGroup>
        </StyledFields>
      </Paper>
    </StyledContainer>
  );
};
