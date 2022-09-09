import { Logo } from "@atoms";
import { Navigation } from "@molecules";
import { StyledContainer } from "./Header.styles";

export const Header = () => {
  return (
    <StyledContainer>
      <Logo />
      <Navigation />
    </StyledContainer>
  );
};
