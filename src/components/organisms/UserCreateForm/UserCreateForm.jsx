import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useFetchAddress, useUserService } from "@hooks";
import { Button, Paper, Separator, Title } from "@atoms";
import { ButtonGroup, InputField } from "@molecules";
import { newUserSchema } from "@validations";

import {
  StyledFields,
  StyledContainer,
  StyledRow,
  StyledButtonContainer,
} from "./UserCreateForm.styles";

const DATA_USR = {
  email: "michael@teste.com.br",
  password: "11223344",
  passwordConfirm: "11223344",
  fullName: "Mika Nsc",
  photoUrl: "https://github.com/mikansc.png",
  phone: "(47) 99999-9999",
  userAddress: {
    zipCode: "89227-210",
    street: "",
    number: 123,
    neighborhood: "",
    city: "",
    state: "",
    complement: "Casa",
  },
};

export const UserCreateForm = () => {
  const { registerUser } = useUserService();
  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    defaultValues: DATA_USR,
    resolver: yupResolver(newUserSchema),
  });
  const { errors } = formState;

  const { findByCep } = useFetchAddress({
    onFound: (address) => setValue("userAddress", address),
  });

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Cadastrar usuário</Title>
        <StyledFields onSubmit={handleSubmit(registerUser)}>
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

          <StyledRow>
            <InputField
              {...register("password")}
              type="password"
              label="Senha"
              placeholder="digite sua senha..."
              error={errors.password?.message}
            />
            <InputField
              {...register("passwordConfirm")}
              type="password"
              label="Confirme a senha"
              placeholder="digite sua senha novamente..."
              error={errors.passwordConfirm?.message}
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
              {...register("userAddress.compliment")}
              label="Complemento"
              placeholder="digite o complemento..."
              error={errors.userAddress?.compliment?.message}
            />
          </StyledRow>
          <StyledRow columns="3">
            <InputField
              {...register("userAddress.neighborhood")}
              label="Bairro"
              placeholder="digite o bairro..."
              error={errors.userAddress?.neighborhood?.message}
            />
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
