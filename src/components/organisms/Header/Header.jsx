import { useLocation } from "react-router-dom";

import { useAuthContext } from "@contexts";
import { Logo } from "@atoms";
import { Navigation } from "@molecules";
import { LoggedUser } from "@organisms";

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
