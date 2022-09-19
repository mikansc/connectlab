/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { useFetchAllDevices, useFetchUserDevices } from "@hooks";
import { useAuthContext } from "./auth-context";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const DevicesProvider = ({ children }) => {
  const { user } = useAuthContext();
  const { devices: allDevices, filterByName } = useFetchAllDevices();
  const { userDevices, saveDeviceToUser, toggleDevice } = useFetchUserDevices(user?.id);

  const addDeviceToUser = (device) => {
    saveDeviceToUser({ ...device, user: user.id });
  };

  return (
    <ContextProvider
      value={{ allDevices, userDevices, filterByName, addDeviceToUser, toggleDevice }}
    >
      {children}
    </ContextProvider>
  );
};

export const useDevicesContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useDevicesContext can only be used inside DevicesProvider");
  return ctx;
};
