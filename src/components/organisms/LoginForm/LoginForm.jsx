import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuthContext } from "@contexts";
import { Button, ButtonGroup, Paper, Title } from "@atoms";
import { InputField } from "@molecules";
import { loginSchema } from "@validations";

import { StyledLoginFields, StyledContainer } from "./LoginForm.styles";

export const LoginForm = () => {
  const { signIn } = useAuthContext();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const { errors } = formState;

  const handleSignIn = (data) => {
    signIn(data);
  };

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Acessar</Title>
        <StyledLoginFields>
          <InputField
            {...register("username")}
            error={errors.username?.message}
            label="Usuário"
            placeholder="usuario@mail.com"
          />
          <InputField
            {...register("password")}
            error={errors.password?.message}
            type="password"
            label="Senha"
            placeholder="digite sua senha..."
          />
        </StyledLoginFields>
        <ButtonGroup>
          <Button onClick={handleSubmit(handleSignIn)}>Entrar</Button>
          <Button as={Link} to="/signup">
            Cadastrar
          </Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
