import { UserForm } from "@organisms";
import { DefaultPage } from "@templates";
import { useAuthContext } from "@contexts";

export const UserUpdate = () => {
  const { user } = useAuthContext();

  return (
    <DefaultPage>
      <UserForm title="Atualizar usuário" userData={user} />
    </DefaultPage>
  );
};
