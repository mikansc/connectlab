/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "@contexts";
import { getAllDevices, getUserDevices } from "@services";
import { useAuthentication } from "./useAuthentication";

export const useFetchDevices = () => {
  const { setStatus } = useAppContext();
  const { user } = useAuthentication();
  const userId = user?.id;

  const [allDevices, setAllDevices] = useState([]);
  const [userDevices, setUserDevices] = useState([]);
  const [filter, setFilter] = useState(null);

  const requestAllDevices = useCallback(async () => {
    setStatus.loading();
    const results = await Promise.allSettled([getUserDevices(userId), getAllDevices()]);
    const [userDevices, allDevices] = results;

    if (userDevices.status === "fulfilled") {
      setUserDevices(userDevices.value);
    } else {
      setStatus.error("Não foi possível listar seus dispositivos");
    }
    if (allDevices.status === "fulfilled") {
      setAllDevices(allDevices.value);
    } else {
      setStatus.error("Não foi possível listar os dispositivos");
    }
    setStatus.success();
  }, [setStatus, userId]);

  useEffect(() => {
    if (!userId) return;
    requestAllDevices();
  }, [requestAllDevices, userId]);

  const filterByName = useCallback((deviceName) => {
    if (deviceName && deviceName.trim()) {
      setFilter(deviceName.trim().toLowerCase());
    } else {
      setFilter(null);
    }
  }, []);

  const devices = filter
    ? allDevices.filter((d) => d.name.toLowerCase().includes(filter))
    : allDevices;

  return {
    devices,
    userDevices,
    filterByName,
  };
};
