import { DefaultPage } from "@templates";

import { Separator, Title } from "@atoms";
import { Device, Filter } from "@molecules";
import { AddDeviceModal, DeviceGrid } from "@organisms";

import { devices } from "../../../mock/devices";
import { useModalContext } from "@contexts";

export const DeviceList = () => {
  const { isOpen, toggleModal } = useModalContext();

  return (
    <DefaultPage>
      <Title as="h2" align="left">
        Adicionar dispositivo
      </Title>
      <Separator />
      <Filter />
      <DeviceGrid title="Todos os dispositivos">
        {devices.map((device) => (
          <Device key={device.id} device={device} onClick={toggleModal} />
        ))}
      </DeviceGrid>
      <AddDeviceModal open={isOpen} />
    </DefaultPage>
  );
};
