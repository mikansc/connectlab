/* eslint-disable react/prop-types */
import React from "react";
import { useAuthentication } from "@hooks";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, signIn, signOut, user, persistUser } = useAuthentication();

  return (
    <ContextProvider value={{ isLoggedIn, signIn, signOut, user, persistUser }}>
      {children}
    </ContextProvider>
  );
};

export const useAuthContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useAuthContext can only be used inside AuthProvider");
  return ctx;
};
