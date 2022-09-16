import { useAppContext } from "@contexts";
import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, Property } from "@molecules";

import { StyledContainer, StyledHeader } from "./DeviceDetails.styles";

export const DeviceDetails = () => {
  const { modal } = useAppContext();
  const { photoUrl, title, info } = modal.data;

  return (
    <StyledContainer>
      <Paper>
        <StyledHeader>
          <Avatar size="large" imageUrl={`img/${photoUrl}`} />
          <Title as="h3">{title}</Title>
        </StyledHeader>
        <Separator />
        <Property title="Virtual ID" value={info.virtual_id} />
        <Property title="IP Address" value={info.ip_address} />
        <Property title="Mac Address" value={info.mac_address} />
        <Property title="Signal" value={info.signal} />
        <ButtonGroup>
          <Button>Remover</Button>
          <Button onClick={() => modal.close()}>Fechar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
