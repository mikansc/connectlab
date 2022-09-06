import { getAllDevices } from "@services";
import { useEffect } from "react";

export const DeviceDetails = () => {
  useEffect(() => {
    getAllDevices();
  }, []);

  return <div>DeviceDetails</div>;
};
