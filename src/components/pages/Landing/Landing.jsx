import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "@contexts";
import { Image, Logo } from "@atoms";
import { LoginForm } from "@organisms";

import {
  StyledContainer,
  StyledFormWrapper,
  StyledLeftContent,
  StyledLogoWrapper,
  StyledRightContent,
} from "./Landing.styles";

import LandingImage from "./assets/img/smart-house.jpg";

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
