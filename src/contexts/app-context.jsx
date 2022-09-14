/* eslint-disable react/prop-types */
import React from "react";
import { useStatus } from "@hooks";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const AppProvider = ({ children }) => {
  const { setStatus, status } = useStatus();

  return <ContextProvider value={{ status, setStatus }}>{children}</ContextProvider>;
};

export const useAppContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useAppContext can only be used inside AppProvider");
  return ctx;
};
