import PropTypes from "prop-types";

import { Button, Paper, Separator, Title } from "@atoms";
import { Avatar, ButtonGroup, InputField } from "@molecules";

import { StyledCenteredAvatar, StyledContainer } from "./NewDevice.styles";

export const NewDevice = ({ onSave, onCancel }) => {
  return (
    <StyledContainer>
      <Paper>
        <StyledCenteredAvatar>
          <Avatar size="large" />
        </StyledCenteredAvatar>
        <Title as="h3">Lâmpada inteligente</Title>
        <Separator />
        <InputField label="Local" placeholder="Selecione o local..." />
        <InputField label="Cômodo" placeholder="Selecione o cômodo..." />
        <Separator />
        <ButtonGroup>
          <Button>Salvar</Button>
          <Button>Cancelar</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};

NewDevice.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};