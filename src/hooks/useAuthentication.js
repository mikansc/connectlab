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

  useEffect(() => {
    setStatus.loading();
    storageService.save(query, user);
    setStatus.success();
  }, [setStatus, user]);

  const persistUser = useCallback((user) => {
    console.log("persistUser", user);
    setUser(user);
  }, []);

  const signIn = useCallback(
    (authData) => {
      setStatus.loading();
      login(authData)
        .then((data) => {
          setUser(data);
          setStatus.success();
        })
        .catch((err) => {
          console.error(err.message);
          setStatus.error();
        });
    },
    [setStatus],
  );

  const signOut = useCallback(() => {
    storageService.clearAll();
    setUser(null);
  }, []);

  const isLoggedIn = !!user && !!user.accessToken;

  return {
    isLoggedIn,
    user,
    signIn,
    signOut,
    persistUser,
    retrieveUser,
  };
};
