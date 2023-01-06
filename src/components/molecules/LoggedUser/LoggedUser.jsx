import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Avatar } from "@molecules";

import {
  StyledClock,
  StyledContainer,
  StyledUserData,
  StyledUserName,
  StyledWrapper,
} from "./LoggedUser.styles";

export const LoggedUser = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { fullName, photoUrl } = user;

  const goToUserProfile = () => {
    navigate("/dashboard/profile");
  };

  return (
    <StyledWrapper onClick={goToUserProfile}>
      <StyledContainer>
        <Avatar imageUrl={photoUrl} name={fullName} size="small" />
        <StyledUserData>
          <StyledUserName>{t("user.greeting", { name: fullName })}</StyledUserName>
          <StyledClock>{t("misc.full_date", { date: Date.now() })}</StyledClock>
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
