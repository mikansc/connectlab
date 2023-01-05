import { useTranslation } from "react-i18next";

import { useAppContext, useDevicesContext } from "@contexts";
import { Button, ButtonGroup, Paper, Separator, Title } from "@atoms";
import { Avatar, Property, ToggleField } from "@molecules";

import { StyledContainer, StyledHeader } from "./DeviceDetails.styles";

export const DeviceDetails = () => {
  const { modal } = useAppContext();
  const { toggleDevice } = useDevicesContext();
  const { t } = useTranslation();
  const { device, is_on } = modal.data;
  const { info, photoUrl, name } = device;

  return (
    <StyledContainer>
      <Paper>
        <StyledHeader>
          <Avatar size="large" imageUrl={`${photoUrl}`} />
          <Title as="h3">{name}</Title>
          <ToggleField
            label={t("device.toggle.label")}
            name="is_on"
            checked={is_on}
            onChange={() => toggleDevice(modal.data)}
          />
        </StyledHeader>

        <Separator />
        <Property title={t("device.property.virtual_id")} value={info.virtual_id} />
        <Property title={t("device.property.ip_address")} value={info.ip_address} />
        <Property title={t("device.property.mac_address")} value={info.mac_address} />
        <Property title={t("device.property.signal")} value={info.signal} />
        <ButtonGroup>
          <Button onClick={() => modal.close()}>{t("buttons.close")}</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  );
};
