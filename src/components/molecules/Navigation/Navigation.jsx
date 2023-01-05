import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledLink, StyledNav } from "./Navigation.styles";

const routeLinks = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/devices", name: "Dispositivos" },
];

export const Navigation = ({ activePath, onSignOut, loggedUserComponent }) => {
  const { t } = useTranslation();
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
          {t("button.signout")}
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
