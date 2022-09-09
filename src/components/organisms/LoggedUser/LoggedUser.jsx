import { Avatar } from "@molecules";
import { useNavigate } from "react-router-dom";
import {
  StyledClock,
  StyledContainer,
  StyledUserData,
  StyledUserName,
  StyledWrapper,
} from "./LoggedUser.styles";
const formatDate = (date) => {
  return Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(date);
};

export const LoggedUser = () => {
  const navigate = useNavigate();
  const goToUserProfile = () => {
    navigate("/dashboard/profile");
  };
  return (
    <StyledWrapper onClick={goToUserProfile}>
      <StyledContainer>
        <Avatar imageUrl="https://github.com/mikansc.png" size="small" />
        <StyledUserData>
          <StyledUserName>Olá, Michael Nascimento</StyledUserName>
          <StyledClock>{formatDate(Date.now())}</StyledClock>
        </StyledUserData>
      </StyledContainer>
    </StyledWrapper>
  );
};
