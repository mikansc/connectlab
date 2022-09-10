import { DefaultPage } from "@templates";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

import { useDevicesContext } from "@contexts";

export const Dashboard = () => {
  const { devices } = useDevicesContext();

  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid title="Meus dispositivos">
        {devices.map((device) => (
          <UserDevice key={device.id} device={device} />
        ))}
      </DeviceGrid>
      <DeviceModal open={false} />
    </DefaultPage>
  );
};
