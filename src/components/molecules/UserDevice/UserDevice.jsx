import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Icon, Paper, Text, Title } from "@atoms";
import { Avatar } from "@molecules";

import { StyledContainer, StyledDeviceData, StyledWrapper } from "./UserDevice.styles";

export const UserDevice = ({ deviceData, onClick }) => {
  const theme = useTheme();

  const { device, room, is_on } = deviceData;
  const statusIcon = is_on ? "flash_on" : "flash_off";
  const iconColor = is_on ? theme.colors.success : theme.colors.gray;

  return (
    <StyledWrapper onClick={onClick}>
      <Paper>
        <StyledContainer>
          <Avatar imageUrl={`${device.photoUrl}`} name={device.name} size="medium" />
          <StyledDeviceData>
            <Title as="span" align="left" variant="secondary">
              {device?.name}
            </Title>
            <Text>
              {room} | {is_on ? "ON" : "OFF"}
            </Text>
          </StyledDeviceData>
          <Icon size="3.2rem" color={iconColor} name={statusIcon} />
        </StyledContainer>
      </Paper>
    </StyledWrapper>
  );
};

UserDevice.propTypes = {
  deviceData: PropTypes.shape({
    is_on: PropTypes.bool,
    room: PropTypes.string,
    device: PropTypes.shape({
      photoUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func,
};
