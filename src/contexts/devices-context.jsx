/* eslint-disable react/prop-types */
import React from "react";

import { useFetchDevices } from "@hooks";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const DevicesProvider = ({ children }) => {
  const result = useFetchDevices();

  return <ContextProvider value={result}>{children}</ContextProvider>;
};

export const useDevicesContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useDevicesContext can only be used inside DevicesProvider");
  return ctx;
};
