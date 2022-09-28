import PropTypes from "prop-types";

import { Avatar } from "@molecules";
import { Button, ButtonGroup, Paper, Title } from "@atoms";

import { StyledContainer, StyledDeviceData } from "./Device.styles";

export const Device = ({ device, onClick }) => {
  return (
    <Paper>
      <StyledContainer>
        <Avatar imageUrl={device?.photoUrl} name={device?.name} size="large" />
        <StyledDeviceData>
          <Title as="span" variant="secondary">
            {device?.name}
          </Title>
          <ButtonGroup>
            <Button onClick={onClick}>Adicionar</Button>
          </ButtonGroup>
        </StyledDeviceData>
      </StyledContainer>
    </Paper>
  );
};

Device.propTypes = {
  device: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    madeBy: PropTypes.string,
    photoUrl: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};
