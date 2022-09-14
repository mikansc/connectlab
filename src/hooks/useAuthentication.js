import { useCallback, useEffect, useState } from "react";
import { login, storageService } from "@services";
import { useAppContext } from "@contexts";

const query = "usr";

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const { setStatus } = useAppContext();

  const retrieveUser = useCallback(() => {
    return storageService.get(query);
  }, []);

  useEffect(() => {
    setStatus.loading();
    const user = retrieveUser();
    if (user) setUser(user);
    setStatus.success();
  }, [retrieveUser, setStatus]);

  const signIn = ({ username, password }) => {
    setStatus.loading();
    login({ username, password })
      .then((data) => {
        storageService.save(query, data);
        setUser(data);
        setStatus.success();
      })
      .catch((err) => {
        console.error(err.message);
        setStatus.error();
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
    retrieveUser,
  };
};
