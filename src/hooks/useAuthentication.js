import { useEffect, useState } from "react";
import { login, storageService } from "@services";
import { useAppContext } from "@contexts";
import { StatusTypes } from "@utils";

const query = "usr";

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const { setStatus } = useAppContext();

  useEffect(() => {
    setStatus(StatusTypes.loading);
    const user = storageService.get(query);
    if (user) setUser(user);
    setStatus(StatusTypes.success);
  }, [setStatus]);

  const signIn = ({ username, password }) => {
    setStatus(StatusTypes.loading);
    login({ username, password })
      .then(({ data }) => {
        const { accessToken, user } = data;
        const preparedData = { accessToken, ...user };
        storageService.save(query, preparedData);
        setUser(preparedData);
        setStatus(StatusTypes.success);
      })
      .catch((err) => {
        console.error(err.message);
        setStatus(StatusTypes.error);
      });
  };

  const signOut = () => {
    storageService.clear(query);
    setUser(null);
  };

  const isLoggedIn = !!user && !!user.accessToken;

  return {
    isLoggedIn,
    user,
    signIn,
    signOut,
  };
};
