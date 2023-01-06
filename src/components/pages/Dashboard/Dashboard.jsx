import { useTranslation } from "react-i18next";

import { Text } from "@atoms";
import { useAppContext, useDevicesContext } from "@contexts";
import { UserDevice } from "@molecules";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";
import { DefaultPage } from "@templates";

export const Dashboard = () => {
  const { userDevices: devices } = useDevicesContext();
  const { t } = useTranslation();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid title={t("heading.my_devices")}>
        {devices.length === 0 && <Text>{t("misc.no_devices")}</Text>}
        {devices.map((device) => (
          <UserDevice onClick={() => modal.open(device)} key={device._id} deviceData={device} />
        ))}
      </DeviceGrid>
      <DeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};
