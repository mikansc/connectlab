import { Button, Paper, Separator, Title } from "@atoms";
import { useModalContext } from "@contexts";
import { Avatar, ButtonGroup, Property } from "@molecules";

import { StyledContainer } from "./DeviceDetails.styles";

export const DeviceDetails = () => {
  const { closeModal, data } = useModalContext();
  const { photoUrl, title, info } = data;

  return (
    <StyledContainer>
      <Paper>
        <Avatar size="medium" imageUrl={`img/${photoUrl}`} />
        <Title as="h3">{title}</Title>
        <Separator />
        <Property title="Virtual ID" value={info.virtual_id} />
        <Property title="IP Address" value={info.ip_address} />
        <Property title="Mac Address" value={info.mac_address} />
        <Property title="Signal" value={info.signal} />
        <ButtonGroup>
          <Button>Remover</Button>
          <Button onClick={() => closeModal()}>Fechar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
