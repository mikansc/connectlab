import { Link } from "react-router-dom";

import { Button, Paper, Title } from "@atoms";
import { ButtonGroup, InputField } from "@molecules";
import { StyledLoginFields, StyledContainer } from "./LoginForm.styles";
import { useAuthContext } from "@contexts";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { signIn } = useAuthContext();
  const { register, handleSubmit } = useForm({
    defaultValues: { username: "usuario@teste.com.br", password: "123456" },
  });

  const handleSignIn = (data) => {
    signIn(data);
  };

  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Acessar</Title>
        <StyledLoginFields>
          <InputField {...register("username")} label="Usuário" placeholder="usuario@mail.com" />
          <InputField
            {...register("password")}
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
