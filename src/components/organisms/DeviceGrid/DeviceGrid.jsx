import { Paper, Title } from "@atoms";
import { UserDevice } from "@molecules";
import { StyledGrid } from "./DeviceGrid.styles";

export const DeviceGrid = () => {
  return (
    <Paper>
      <Title as="h3" align="left">
        Meus dispositivos
      </Title>
      <StyledGrid>
        {devicesMock.map((device) => (
          <UserDevice key={device.id} device={device} />
        ))}
      </StyledGrid>
    </Paper>
  );
};

const devicesMock = [
  {
    id: 1,
    userId: 1,
    title: "Lâmpada iteligente",
    photoUrl: "img/device-placeholder.png",
    is_on: true,
    local: {
      name: "casa",
      room: "sala",
    },
    info: {
      virtual_id: "abcd1234",
      ip_address: "127.0.0.1",
      mac_address: "127.0.0.1",
      signal: "-70dBm",
    },
  },
  {
    id: 2,
    userId: 1,
    title: "Lâmpada iteligente",
    photoUrl: "img/device-placeholder.png",
    is_on: false,
    local: {
      name: "casa",
      room: "quarto",
    },
    info: {
      virtual_id: "abcd1234",
      ip_address: "127.0.0.1",
      mac_address: "127.0.0.1",
      signal: "-70dBm",
    },
  },
  {
    id: 3,
    userId: 1,
    title: "Lâmpada iteligente",
    photoUrl: "img/device-placeholder.png",
    is_on: true,
    local: {
      name: "casa",
      room: "sala",
    },
    info: {
      virtual_id: "abcd1234",
      ip_address: "127.0.0.1",
      mac_address: "127.0.0.1",
      signal: "-70dBm",
    },
  },
];
