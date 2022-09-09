import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, Property } from "@molecules";

import { StyledContainer } from "./DeviceDetails.styles";

export const DeviceDetails = () => {
  return (
    <StyledContainer>
      <Paper>
        <Avatar size="medium" />
        <Title as="h3">Lâmpada inteligente</Title>
        <Separator />
        <Property title="Titulo" value="Valor" />
        <Property title="Titulo" value="Valor" />
        <Property title="Titulo" value="Valor" />
        <Property title="Titulo" value="Valor" />
        <Property title="Titulo" value="Valor" />
        <ButtonGroup>
          <Button>Remover</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
