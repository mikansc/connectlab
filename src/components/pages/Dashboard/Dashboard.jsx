import { DefaultPage } from "@templates";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

import { useAppContext, useDevicesContext } from "@contexts";

export const Dashboard = () => {
  const { devices } = useDevicesContext();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid title="Meus dispositivos">
        {devices.map((device) => (
          <UserDevice onClick={() => modal.open(device)} key={device.id} device={device} />
        ))}
      </DeviceGrid>
      <DeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};
