import { DefaultPage } from "@templates";

import { Separator, Title } from "@atoms";
import { Device, Filter } from "@molecules";
import { AddDeviceModal, DeviceGrid } from "@organisms";

import { useAppContext } from "@contexts";
import { useFetchDefices } from "@hooks";

export const DeviceList = () => {
  const { devices } = useFetchDefices();
  const { modal } = useAppContext();

  return (
    <DefaultPage>
      <Title as="h2" align="left">
        Adicionar dispositivo
      </Title>
      <Separator />
      <Filter />
      <DeviceGrid title="Todos os dispositivos">
        {devices.map((device, idx) => (
          <Device key={`${idx}-${device.id}`} device={device} onClick={() => modal.open(device)} />
        ))}
      </DeviceGrid>
      <AddDeviceModal open={modal.isOpen} />
    </DefaultPage>
  );
};
