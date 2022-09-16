import { storageService, updateUser } from "@services";
import { useAppContext, useAuthContext } from "@contexts";

export const useUserService = () => {
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
      })
      .catch(() => setStatus.error());
  };

  return {
    registerUser,
    saveUser,
  };
};
