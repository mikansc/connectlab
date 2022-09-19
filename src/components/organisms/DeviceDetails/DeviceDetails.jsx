import { useAppContext, useDevicesContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, Property, ToggleField } from "@molecules";

import { StyledContainer, StyledHeader } from "./DeviceDetails.styles";

export const DeviceDetails = () => {
  const { modal } = useAppContext();
  const { toggleDevice } = useDevicesContext();
  const { device, is_on } = modal.data;
  const { info, photoUrl, name } = device;

  return (
    <StyledContainer>
      <Paper>
        <StyledHeader>
          <Avatar size="large" imageUrl={`${photoUrl}`} />
          <Title as="h3">{name}</Title>
          <ToggleField
            label="Ligado"
            name="is_on"
            checked={is_on}
            onChange={() => toggleDevice(modal.data)}
          />
        </StyledHeader>

        <Separator />
        <Property title="Virtual ID" value={info.virtual_id} />
        <Property title="IP Address" value={info.ip_address} />
        <Property title="Mac Address" value={info.mac_address} />
        <Property title="Signal" value={info.signal} />
        <ButtonGroup>
          {/* <Button>Remover</Button> */}
          <Button onClick={() => modal.close()}>Fechar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
