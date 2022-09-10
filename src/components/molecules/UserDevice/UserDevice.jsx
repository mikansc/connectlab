import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Avatar } from "@molecules";
import { Icon, Paper, Text, Title } from "@atoms";

import { StyledContainer, StyledDeviceData, StyledWrapper } from "./UserDevice.styles";

export const UserDevice = ({ device, onClick }) => {
  const theme = useTheme();
  const deviceOnline = device && device.is_on;
  const statusIcon = deviceOnline ? "flash_on" : "flash_off";
  const iconColor = deviceOnline ? theme.colors.success : theme.colors.gray;

  return (
    <StyledWrapper onClick={onClick}>
      <Paper>
        <StyledContainer>
          {/* FIXME - url from device must come from backend */}
          <Avatar imageUrl={`img/${device?.photoUrl}`} name={device?.title} size="medium" />
          <StyledDeviceData>
            <Title as="span" align="left" variant="secondary">
              {device?.title}
            </Title>
            <Text>
              {device?.local.room} | {deviceOnline ? "ON" : "OFF"}
            </Text>
          </StyledDeviceData>
          <Icon size="3.2rem" color={iconColor} name={statusIcon} />
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
