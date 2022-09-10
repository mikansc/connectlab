import { DefaultPage } from "@templates";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

import { useUserDevices } from "@hooks";
import { useAuthContext } from "@contexts";

export const Dashboard = () => {
  const { user } = useAuthContext();
  const { devices } = useUserDevices(user.id);

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
