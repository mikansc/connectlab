import { useAppContext, useDevicesContext } from "@contexts";
import { Separator, Text, Title } from "@atoms";
import { Device, Filter } from "@molecules";
import { AddDeviceModal, DeviceGrid } from "@organisms";
import { DefaultPage } from "@templates";

export const DeviceList = () => {
  const { allDevices: devices, filterByName } = useDevicesContext();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <Title as="h2" align="left">
        Adicionar dispositivo
      </Title>
      <Separator />
      <Filter onChangeFilter={filterByName} />
      <DeviceGrid title="Todos os dispositivos">
        {devices.length === 0 && <Text>Não há dispositivos para serem exibidos.</Text>}
        {devices.map((device, idx) => (
          <Device key={`${idx}-${device.id}`} device={device} onClick={() => modal.open(device)} />
        ))}
      </DeviceGrid>
      <AddDeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};
