import { Logo } from "@atoms";
import { Navigation } from "@molecules";
import { LoggedUser } from "../LoggedUser";
import { StyledContainer } from "./Header.styles";

export const Header = () => {
  return (
    <StyledContainer>
      <Logo />
      <LoggedUser />
      <Navigation />
    </StyledContainer>
  );
};
