/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { useAuthentication } from "@hooks";
import { getUserDevices } from "@services";
import { useAppContext } from "./app-context";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const DevicesProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const { setStatus } = useAppContext();
  const { user } = useAuthentication();
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;
    setStatus.loading();
    getUserDevices(userId)
      .then((data) => {
        setDevices(data);
        setStatus.success();
      })
      .catch((e) => {
        console.error(e.message);
        setStatus.error();
      });
  }, [setStatus, userId]);

  return <ContextProvider value={{ devices }}>{children}</ContextProvider>;
};

export const useDevicesContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useDevicesContext can only be used inside DevicesProvider");
  return ctx;
};
