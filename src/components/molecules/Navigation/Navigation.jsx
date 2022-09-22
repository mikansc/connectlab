import PropTypes from "prop-types";

import { StyledLink, StyledNav } from "./Navigation.styles";
// import { LoggedUser } from "@molecules";

const routeLinks = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/devices", name: "Dispositivos" },
];

export const Navigation = ({ activePath, onSignOut, loggedUserComponent }) => {
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
          Sair
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
