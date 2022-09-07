import { Image, Logo } from "@atoms";
import { LoginForm } from "@organisms";
import LandingImage from "./assets/img/smart-house.jpg";

import {
  StyledContainer,
  StyledFormWrapper,
  StyledLeftContent,
  StyledLogoWrapper,
  StyledRightContent,
} from "./Landing.styles";

export const Landing = () => {
  return (
    <StyledContainer>
      <StyledLeftContent>
        <Image src={LandingImage} alt="Welcome to the landing page" />
      </StyledLeftContent>
      <StyledRightContent>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        <StyledFormWrapper>
          <LoginForm />
        </StyledFormWrapper>
      </StyledRightContent>
    </StyledContainer>
  );
};
