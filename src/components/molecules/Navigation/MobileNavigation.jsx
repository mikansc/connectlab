/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Icon } from "@atoms";

import {
  StyledBurger,
  StyledButton,
  StyledButtonContainer,
  StyledNavContainer,
} from "./MobileNavigation.styles";

const routeLinks = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/devices", name: "Dispositivos" },
];

export const MobileNavigation = ({ activePath, onSignOut, loggedUserComponent }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((o) => !o);
  };

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  return (
    <>
      <StyledBurger $open={open} to={"/"} onClick={toggleMenu}>
        <Icon name="menu" />
      </StyledBurger>
      <StyledNavContainer $open={open}>
        <StyledButtonContainer>{loggedUserComponent}</StyledButtonContainer>
        {routeLinks.map(({ path, name }) => (
          <StyledButton disabled={activePath === path} key={name} onClick={handleNavigate(path)}>
            {name}
          </StyledButton>
        ))}
        <StyledButton as="button" onClick={onSignOut}>
          {t("button.signout")}
        </StyledButton>
      </StyledNavContainer>
    </>
  );
};

MobileNavigation.propTypes = {
  loggedUserComponent: PropTypes.node,
  activePath: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};
