import { useState } from "react";
import { login } from "@services";
import { useAppContext } from "@contexts";
import { StatusTypes } from "@utils";

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const { setStatus } = useAppContext();

  const signIn = ({ username, password }) => {
    setStatus(StatusTypes.loading);
    login({ username, password })
      .then(({ data }) => {
        const { accessToken, user } = data;
        setUser({ accessToken, ...user });
        setStatus(StatusTypes.success);
      })
      .catch((err) => {
        console.error(err.message);
        setStatus(StatusTypes.error);
      });
  };

  const signOut = () => {
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
