import { Logo } from "@atoms";
import { useAuthContext } from "@contexts";
import { Navigation } from "@molecules";
import { useLocation } from "react-router-dom";
import { LoggedUser } from "../LoggedUser";
import { StyledContainer } from "./Header.styles";

export const Header = () => {
  const { pathname } = useLocation();
  const { signOut } = useAuthContext();

  return (
    <StyledContainer>
      <Logo />
      <LoggedUser />
      <Navigation activePath={pathname} onSignOut={signOut} />
    </StyledContainer>
  );
};
