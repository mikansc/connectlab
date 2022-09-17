import { useNavigate } from "react-router-dom";

import { storageService, updateUser, createUser } from "@services";
import { useAppContext, useAuthContext } from "@contexts";

export const useUserService = () => {
  const navigate = useNavigate();
  const { user, persistUser } = useAuthContext();
  const { setStatus } = useAppContext();

  const registerUser = (userData) => {
    setStatus.loading();
    createUser(userData)
      .then(() => {
        setStatus.success("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch(() => setStatus.error());
  };

  const saveUser = (userData) => {
    setStatus.loading();
    updateUser(user.id, userData)
      .then((updatedUser) => {
        persistUser({ ...user, ...updatedUser });
        storageService.clear("weather");
        setStatus.success("Usuário atualizado com sucesso");
        navigate("../profile");
      })
      .catch(() => setStatus.error());
  };

  return {
    registerUser,
    saveUser,
  };
};
