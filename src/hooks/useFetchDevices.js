import { useEffect, useState } from "react";
import { useAppContext } from "@contexts";
import { getAllDevices } from "@services";

export const useFetchDefices = () => {
  const { setStatus } = useAppContext();

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    setStatus.loading();
    getAllDevices()
      .then((data) => {
        setDevices(data);
        setStatus.success();
      })
      .catch((e) => {
        console.error(e.message);
        setStatus.error();
      });
  }, [setStatus]);

  return {
    devices,
  };
};
