import { useState } from "react";

export const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => {
    setIsLoggedIn(true);
    console.log("sign in");
  };
  const signOut = () => {
    setIsLoggedIn(false);
    console.log("sign out");
  };

  return {
    isLoggedIn,
    signIn,
    signOut,
  };
};
