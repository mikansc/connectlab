import { useCallback, useEffect, useState } from "react";

import { useAppContext, useAuthContext } from "@contexts";
import { getUserDevices } from "@services";

export const useFetchUserDevices = () => {
  const { setStatus } = useAppContext();
  const { user } = useAuthContext();
  const userId = user?.id;

  const [userDevices, setUserDevices] = useState([]);

  const requestAllDevices = useCallback(async () => {
    try {
      setStatus.loading();
      const result = await getUserDevices(userId);
      setUserDevices(result);
    } catch {
      setStatus.error("Não foi possível listar seus dispositivos");
    }

    setStatus.success();
  }, [setStatus, userId]);

  useEffect(() => {
    if (!userId) return;
    requestAllDevices();
  }, [requestAllDevices, userId]);

  return {
    userDevices,
  };
};
