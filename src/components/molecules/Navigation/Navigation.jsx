import { useAuthContext } from "@contexts";
import { useLocation } from "react-router-dom";
import { StyledLink, StyledNav } from "./Navigation.styles";

const routeLinks = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/devices", name: "Dispositivos" },
];

export const Navigation = () => {
  const { pathname } = useLocation();
  const { signOut } = useAuthContext();

  return (
    <StyledNav>
      {routeLinks.map(({ path, name }) => (
        <StyledLink key={name} active={pathname === path} to={path}>
          {name}
        </StyledLink>
      ))}
      <StyledLink as="button" onClick={signOut}>
        Sair
      </StyledLink>
    </StyledNav>
  );
};
