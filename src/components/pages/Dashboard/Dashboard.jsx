import { DefaultPage } from "@templates";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

// FIXME remove mock
import { devices } from "../../../mock/devices";

export const Dashboard = () => {
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
