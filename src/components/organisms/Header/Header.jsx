import { Logo } from "@atoms";
import { useAuthContext } from "@contexts";
import { Navigation } from "@molecules";
import { useLocation } from "react-router-dom";
import { LoggedUser } from "../LoggedUser";
import { StyledContainer } from "./Header.styles";

export const Header = () => {
  const { pathname } = useLocation();
  const { signOut, isLoggedIn } = useAuthContext();

  return (
    <StyledContainer>
      <Logo />
      {isLoggedIn && <LoggedUser />}
      {isLoggedIn && <Navigation activePath={pathname} onSignOut={signOut} />}
    </StyledContainer>
  );
};
