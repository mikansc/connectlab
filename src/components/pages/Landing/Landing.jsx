import { Image, Logo } from "@atoms";
import { useAuthContext } from "@contexts";
import { LoginForm } from "@organisms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingImage from "./assets/img/smart-house.jpg";

import {
  StyledContainer,
  StyledFormWrapper,
  StyledLeftContent,
  StyledLogoWrapper,
  StyledRightContent,
} from "./Landing.styles";

export const Landing = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
  }, [isLoggedIn, navigate]);

  return (
    <StyledContainer>
      <StyledLeftContent>
        <Image src={LandingImage} alt="ConnectLab Login page" />
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
