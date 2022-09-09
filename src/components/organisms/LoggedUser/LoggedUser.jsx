import { Avatar } from "@molecules";
import { StyledClock, StyledUserData, StyledUserName, StyledWrapper } from "./LoggedUser.styles";
const formatDate = (date) => {
  return Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(date);
};

export const LoggedUser = () => {
  return (
    <StyledWrapper>
      <Avatar imageUrl="https://github.com/mikansc.png" size="small" />
      <StyledUserData>
        <StyledUserName>Olá, Michael Nascimento</StyledUserName>
        <StyledClock>{formatDate(Date.now())}</StyledClock>
      </StyledUserData>
    </StyledWrapper>
  );
};
