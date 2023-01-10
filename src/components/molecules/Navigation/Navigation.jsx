import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledLink, StyledNav } from "./Navigation.styles";

export const Navigation = ({ activePath, onSignOut, loggedUserComponent }) => {
  const { t } = useTranslation();

  const routeLinks = [
    { path: "/dashboard", name: t("button.home") },
    { path: "/dashboard/devices", name: t("button.devices") },
  ];

  return (
    <>
      <StyledNav>
        {loggedUserComponent}
        {routeLinks.map(({ path, name }) => (
          <StyledLink key={name} $active={activePath === path} to={path}>
            {name}
          </StyledLink>
        ))}
        <StyledLink as="button" onClick={onSignOut}>
          {t("button.sign_out")}
        </StyledLink>
      </StyledNav>
    </>
  );
};

Navigation.propTypes = {
  loggedUserComponent: PropTypes.node,
  activePath: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};
