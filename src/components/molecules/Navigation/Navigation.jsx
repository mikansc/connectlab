import PropTypes from "prop-types";

import { StyledLink, StyledNav } from "./Navigation.styles";

const routeLinks = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/devices", name: "Dispositivos" },
];

export const Navigation = ({ activePath, onSignOut }) => {
  return (
    <StyledNav>
      {routeLinks.map(({ path, name }) => (
        <StyledLink key={name} $active={activePath === path} to={path}>
          {name}
        </StyledLink>
      ))}
      <StyledLink as="button" onClick={onSignOut}>
        Sair
      </StyledLink>
    </StyledNav>
  );
};

Navigation.propTypes = {
  activePath: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};
