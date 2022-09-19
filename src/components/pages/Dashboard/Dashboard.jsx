import { Text } from "@atoms";
import { useAppContext, useDevicesContext } from "@contexts";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";
import { DefaultPage } from "@templates";

export const Dashboard = () => {
  const { userDevices: devices } = useDevicesContext();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid title="Meus dispositivos">
        {devices.length === 0 && <Text>Não há dispositivos para serem exibidos.</Text>}
        {devices.map((device) => (
          <UserDevice onClick={() => modal.open(device)} key={device._id} deviceData={device} />
        ))}
      </DeviceGrid>
      <DeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};
