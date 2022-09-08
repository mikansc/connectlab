import { SignupForm } from "@organisms";
import { DefaultPage } from "@templates";

export const UserCreate = () => {
  return (
    <DefaultPage>
      <SignupForm title="Cadastrar usuário" />
    </DefaultPage>
  );
};
