import { useEffect, useState } from "react";
import { getUserDevices } from "@services";

export const useUserDevices = (userId) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (!userId) return;
    getUserDevices(userId)
      .then(setDevices)
      .catch((e) => console.error(e.message));
  }, [userId]);

  return { devices };
};
