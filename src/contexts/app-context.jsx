/* eslint-disable react/prop-types */
import { StatusTypes } from "@utils";
import React, { useState } from "react";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const AppProvider = ({ children }) => {
  const [status, setStatus] = useState(StatusTypes.idle);
  const loading = status === StatusTypes.loading;

  return <ContextProvider value={{ status, setStatus, loading }}>{children}</ContextProvider>;
};

export const useAppContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useAppContext can only be used inside AppProvider");
  return ctx;
};
