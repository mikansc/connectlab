import { useLocation } from "react-router-dom";

import { useAuthContext } from "@contexts";
import { Logo } from "@atoms";
import { LoggedUser, MobileNavigation, Navigation } from "@molecules";

import { StyledContainer } from "./Header.styles";
import { useMatchMedia } from "@hooks";
import { useTheme } from "styled-components";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMatchMedia(theme.breakpoints.medium);

  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const { signOut, isLoggedIn } = useAuthContext();

  const renderNavigation = (props) => {
    return isMobile ? <MobileNavigation {...props} /> : <Navigation {...props} />;
  };

  return (
    <StyledContainer>
      <Logo />
      {isLoggedIn &&
        renderNavigation({
          activePath: pathname,
          onSignOut: signOut,
          loggedUserComponent: <LoggedUser user={user} />,
        })}
    </StyledContainer>
  );
};
