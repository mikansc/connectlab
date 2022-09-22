import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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

export const LoggedUser = ({ user }) => {
  const navigate = useNavigate();
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

LoggedUser.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
};
