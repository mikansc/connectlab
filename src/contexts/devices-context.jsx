/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { useFetchAllDevices, useFetchUserDevices } from "@hooks";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const DevicesProvider = ({ children }) => {
  const { devices: allDevices, filterByName } = useFetchAllDevices();
  const { userDevices } = useFetchUserDevices();

  return (
    <ContextProvider value={{ allDevices, userDevices, filterByName }}>{children}</ContextProvider>
  );
};

export const useDevicesContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useDevicesContext can only be used inside DevicesProvider");
  return ctx;
};
