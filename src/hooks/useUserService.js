import { useNavigate } from "react-router-dom";

import { storageService, updateUser } from "@services";
import { useAppContext, useAuthContext } from "@contexts";

export const useUserService = () => {
  const navigate = useNavigate();
  const { user, persistUser } = useAuthContext();
  const { setStatus } = useAppContext();

  const registerUser = () => {};

  const saveUser = (userData) => {
    setStatus.loading();
    updateUser(user.id, userData)
      .then((updatedUser) => {
        persistUser({ ...user, ...updatedUser });
        storageService.clear("weather");
        setStatus.success();
        navigate("../profile");
      })
      .catch(() => setStatus.error());
  };

  return {
    registerUser,
    saveUser,
  };
};
