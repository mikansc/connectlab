import { DefaultPage } from "@templates";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

import { useDevicesContext, useModalContext } from "@contexts";

export const Dashboard = () => {
  const { devices } = useDevicesContext();
  const { isOpen, openWith } = useModalContext();

  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid title="Meus dispositivos">
        {devices.map((device) => (
          <UserDevice onClick={() => openWith(device)} key={device.id} device={device} />
        ))}
      </DeviceGrid>
      <DeviceModal open={isOpen} />
    </DefaultPage>
  );
};
