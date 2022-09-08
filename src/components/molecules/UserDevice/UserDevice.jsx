import { Icon, Paper, Text, Title } from "@atoms";
import PropTypes from "prop-types";
import { Avatar } from "../Avatar";
import {
  StyledContainer,
  StyledDeviceData,
  StyledDeviceStatus,
  StyledWrapper,
} from "./UserDevice.styles";

export const UserDevice = ({ device, onClick }) => {
  const deviceOnline = device && device.is_on;
  const statusIcon = deviceOnline ? "flash_on" : "flash_off";

  return (
    <StyledWrapper onClick={onClick}>
      <Paper>
        <StyledContainer>
          <Avatar imageUrl={device?.photoUrl} name={device?.title} size="medium" />
          <StyledDeviceData>
            <Title as="span" align="left" variant="secondary">
              {device?.title}
            </Title>
            <Text>
              {device?.local.room} | {deviceOnline ? "ON" : "OFF"}
            </Text>
          </StyledDeviceData>
          <StyledDeviceStatus active={deviceOnline}>
            <Icon name={statusIcon} />
          </StyledDeviceStatus>
        </StyledContainer>
      </Paper>
    </StyledWrapper>
  );
};

UserDevice.propTypes = {
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
