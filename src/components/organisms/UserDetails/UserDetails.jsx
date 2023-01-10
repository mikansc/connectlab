import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAuthContext } from "@contexts";
import { Button, ButtonGroup, Paper, Separator, Text, Title } from "@atoms";
import { Avatar, Property } from "@molecules";

import { StyledContainer, StyledUserDataContainer } from "./UserDetails.styles";

export const UserDetails = () => {
  const t = useTranslation();
  const { user } = useAuthContext();

  const { fullName, email, photoUrl, userAddress, phone } = user;
  const { street, number, city, neighborhood, state, zipCode } = userAddress;

  return (
    <Paper>
      <Title as="h2">{t("heading.user_profile")}</Title>
      <StyledContainer>
        <Avatar size="large" imageUrl={photoUrl} name={fullName} />
        <StyledUserDataContainer>
          <Title as="h4" align="left">
            {fullName}
          </Title>
          <Text>
            {email} - {phone}
          </Text>
        </StyledUserDataContainer>
      </StyledContainer>

      <Separator />
      <Title as="h3">{t("heading.user_address")}</Title>
      <Property title={t("user.address.street")} value={street} />
      <Property title={t("user.address.number")} value={number} />
      <Property title={t("user.address.neighborhood")} value={neighborhood} />
      <Property title={t("user.address.city")} value={city} />
      <Property title={t("user.address.state")} value={state} />
      <Property title={t("user.address.zip_code")} value={zipCode} />

      <Separator />

      <ButtonGroup>
        <Button as={Link} to="/dashboard">
          {t("button.go_back")}
        </Button>
        <Button as={Link} to="/dashboard/profile/edit">
          {t("heading.edit")}
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
