import { Button, Paper, Title } from "@atoms";
import { InputField } from "@molecules";
import { Link } from "react-router-dom";
import { StyledLoginFields, StyledContainer, StyledButtons } from "./LoginForm.styles";

export const LoginForm = () => {
  return (
    <StyledContainer>
      <Paper>
        <Title as="h2">Acessar</Title>
        <StyledLoginFields>
          <InputField name="username" label="Usuário" placeholder="usuario@mail.com" />
          <InputField
            name="password"
            type="password"
            label="Senha"
            placeholder="digite sua senha..."
          />
        </StyledLoginFields>
        <StyledButtons>
          <Button onClick={() => {}}>Entrar</Button>
          <Button as={Link} to="/signup">
            Cadastrar
          </Button>
        </StyledButtons>
      </Paper>
    </StyledContainer>
  );
};
