import { Separator, Title } from "@atoms";
import { Device, Filter } from "@molecules";
import { DeviceGrid } from "@organisms";
import { DefaultPage } from "@templates";
import { devices } from "../../../mock/devices";

export const DeviceList = () => {
  return (
    <DefaultPage>
      <Title as="h2" align="left">
        Adicionar dispositivo
      </Title>
      <Separator />
      <Filter />
      <DeviceGrid title="Todos os dispositivos">
        {devices.map((device) => (
          <Device key={device.id} device={device} />
        ))}
      </DeviceGrid>
    </DefaultPage>
  );
};
