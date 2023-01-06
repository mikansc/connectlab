import { useTranslation } from "react-i18next";
import { useAppContext, useDevicesContext } from "@contexts";
import { Separator, Text, Title } from "@atoms";
import { Device, Filter } from "@molecules";
import { AddDeviceModal, DeviceGrid } from "@organisms";
import { DefaultPage } from "@templates";
import styled from "styled-components";

export const DeviceList = () => {
  const { t } = useTranslation();
  const { allDevices: devices, filterByName } = useDevicesContext();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <DeviceListHeader>
        <Title as="h2" align="left">
          {t("heading.add_device")}
        </Title>
        <Separator />
        <Filter onChangeFilter={filterByName} />
      </DeviceListHeader>
      <DeviceGrid title="Todos os dispositivos">
        {devices.length === 0 && <Text>{t("misc.no_devices")}</Text>}
        {devices.map((device, idx) => (
          <Device key={`${idx}-${device.id}`} device={device} onClick={() => modal.open(device)} />
        ))}
      </DeviceGrid>
      <AddDeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};

const DeviceListHeader = styled.div`
  padding: 0 1em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0;
  }
`;
