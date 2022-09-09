import { UserForm } from "@organisms";
import { DefaultPage } from "@templates";

export const UserCreate = () => {
  return (
    <DefaultPage>
      <UserForm title="Cadastrar usuário" />
    </DefaultPage>
  );
};
