import { Header, SignupForm } from "@organisms";
import { StyledContainer } from "./Users.styles";

export const UserCreate = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <SignupForm />
      </StyledContainer>
    </>
  );
};
