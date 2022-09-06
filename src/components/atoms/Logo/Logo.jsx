import { StyledContainer } from "./Logo.styles";
import LogoImage from "./logo.png";

export const Logo = () => {
  return (
    <StyledContainer>
      <img src={LogoImage} alt="Connect Lab Logo" />
    </StyledContainer>
  );
};
