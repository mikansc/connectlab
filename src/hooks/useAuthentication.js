import { useState } from "react";

export const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = ({ username, password }) => {
    console.log("sign in with:", username, password);
    setIsLoggedIn(true);
  };
  const signOut = () => {
    console.log("sign out");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    signIn,
    signOut,
  };
};
