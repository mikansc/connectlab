import { useCallback, useEffect, useState } from "react";

import { useAppContext } from "@contexts";
import { getAllDevices } from "@services";

export const useFetchAllDevices = () => {
  const { setStatus } = useAppContext();
  const [allDevices, setAllDevices] = useState([]);
  const [filter, setFilter] = useState(null);

  const requestAllDevices = useCallback(async () => {
    try {
      setStatus.loading();
      const results = await getAllDevices();
      setAllDevices(results);
      setStatus.success();
    } catch {
      setStatus.error("Não foi possível listar os dispositivos");
    }
  }, [setStatus]);

  useEffect(() => {
    requestAllDevices();
  }, [requestAllDevices]);

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
    filterByName,
  };
};
