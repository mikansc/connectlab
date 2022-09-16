import { useEffect, useState } from "react";
import { useAppContext } from "@contexts";
import { getAllDevices } from "@services";

export const useFetchDevices = () => {
  const { setStatus } = useAppContext();

  const [allDevices, setAllDevices] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setStatus.loading();
    getAllDevices()
      .then((data) => {
        setAllDevices(data);
        setStatus.success();
      })
      .catch((e) => {
        console.error(e.message);
        setStatus.error();
      });
  }, [setStatus]);

  const filterByName = (deviceName) => {
    if (deviceName && deviceName.trim()) {
      setFilter(deviceName.trim().toLowerCase());
    } else {
      setFilter(null);
    }
  };

  const devices = filter
    ? allDevices.filter((d) => d.name.toLowerCase().includes(filter))
    : allDevices;

  return {
    devices,
    filterByName,
  };
};
