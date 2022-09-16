import { useNavigate } from "react-router-dom";

import { useAuthContext } from "@contexts";
import { Avatar } from "@molecules";

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
  const { user } = useAuthContext();
  const { fullName, photoUrl } = user;

  const goToUserProfile = () => {
    navigate("/dashboard/profile");
  };

  return (
    <StyledWrapper onClick={goToUserProfile}>
      <StyledContainer>
        <Avatar imageUrl={photoUrl} name={fullName} size="small" />
        <StyledUserData>
          <StyledUserName>Olá, {fullName}!</StyledUserName>
          <StyledClock>{formatDate(Date.now())}</StyledClock>
        </StyledUserData>
      </StyledContainer>
    </StyledWrapper>
  );
};
