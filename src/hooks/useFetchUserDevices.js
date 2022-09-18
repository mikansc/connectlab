import { useCallback, useEffect, useState } from "react";

import { useAppContext } from "@contexts";
import { getUserDevices, addDeviceToUser } from "@services";
import { useNavigate } from "react-router-dom";

export const useFetchUserDevices = (userId) => {
  const navigate = useNavigate();
  const { setStatus, modal } = useAppContext();

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

  const saveDeviceToUser = useCallback(
    async (device) => {
      try {
        modal.close();
        setStatus.loading();
        await addDeviceToUser(device);
        await requestAllDevices();
        setStatus.success("Dispositivo vinculado com sucesso");
        navigate("/dashboard");
      } catch {
        setStatus.error("Não foi possível listar seus dispositivos");
      }
    },
    [requestAllDevices, setStatus],
  );

  useEffect(() => {
    if (!userId) return;
    requestAllDevices();
  }, [requestAllDevices, userId]);

  return {
    userDevices,
    saveDeviceToUser,
  };
};
