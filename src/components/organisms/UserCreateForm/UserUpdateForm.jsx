import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useFetchAddress, useUserService } from "@hooks";
import { useAuthContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { ButtonGroup, InputField } from "@molecules";
import { updateUserSchema } from "@validations";

import {
  StyledFields,
  StyledContainer,
  StyledRow,
  StyledButtonContainer,
} from "../UserForm.styles";

export const UserUpdateForm = () => {
  const { user } = useAuthContext();
  const { saveUser } = useUserService();

  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    defaultValues: user,
    resolver: yupResolver(updateUserSchema),
  });

  const { errors } = formState;

  const { findByCep } = useFetchAddress({
    onFound: (address) => setValue("userAddress", address),
  });

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Atualizar usuário</Title>
        <StyledFields onSubmit={handleSubmit(saveUser)}>
          <Title as="h3" align="left">
            Dados pessoais
          </Title>
          <StyledRow>
            <InputField
              {...register("fullName")}
              label="Nome completo"
              placeholder="digite seu nome completo..."
              error={errors.fullName?.message}
            />
            <InputField
              {...register("phone")}
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              error={errors.phone?.message}
            />
          </StyledRow>

          <StyledRow>
            <InputField
              {...register("email")}
              label="E-mail"
              placeholder="usuario@mail.com"
              error={errors.email?.message}
            />

            <InputField
              {...register("photoUrl")}
              label="URL da foto"
              placeholder="insira a url da foto de perfil..."
              error={errors.photoUrl?.message}
            />
          </StyledRow>

          <Separator />

          <Title as="h3" align="left">
            Endereço
          </Title>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.zipCode")}
              label="CEP"
              placeholder="12345000"
              error={errors.userAddress?.zipCode?.message}
            />
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
              error={errors.userAddress?.street?.message}
            />
            <InputField
              {...register("userAddress.number")}
              label="Número"
              placeholder="digite o número..."
              error={errors.userAddress?.number?.message}
            />
            <InputField
              {...register("userAddress.neighborhood")}
              label="Bairro"
              placeholder="digite o bairro..."
              error={errors.userAddress?.neighborhood?.message}
            />
          </StyledRow>
          <StyledRow>
            <InputField
              {...register("userAddress.city")}
              label="Cidade"
              placeholder="digite a cidade..."
              error={errors.userAddress?.city?.message}
            />
            <InputField
              {...register("userAddress.state")}
              label="Estado"
              placeholder="digite o estado..."
              error={errors.userAddress?.state?.message}
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
