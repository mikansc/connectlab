/* eslint-disable react/prop-types */
import React from "react";
import { useStatus, useModal } from "@hooks";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const AppProvider = ({ children }) => {
  const { setStatus, status } = useStatus();
  const modal = useModal();

  return <ContextProvider value={{ status, setStatus, modal }}>{children}</ContextProvider>;
};

export const useAppContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useAppContext can only be used inside AppProvider");
  return ctx;
};
