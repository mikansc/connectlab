import PropTypes from "prop-types";

import { Avatar, ButtonGroup } from "@molecules";
import { Button, Paper, Title } from "@atoms";

import { StyledContainer, StyledDeviceData } from "./Device.styles";

export const Device = ({ device, onClick }) => {
  return (
    <Paper>
      <StyledContainer>
        <Avatar imageUrl={device?.photoUrl} name={device?.title} size="large" />
        <StyledDeviceData>
          <Title as="span" align="left" variant="secondary">
            {device?.title}
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
    title: PropTypes.string,
    photoUrl: PropTypes.string,
    is_on: PropTypes.bool,
    local: PropTypes.shape({
      name: PropTypes.string,
      room: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func,
};
