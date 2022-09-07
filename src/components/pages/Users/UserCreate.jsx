import { Header, SignupForm } from "@organisms";
import { StyledFormWrapper } from "./Users.styles";

export const UserCreate = () => {
  return (
    <>
      <Header />
      <StyledFormWrapper>
        <SignupForm />
      </StyledFormWrapper>
    </>
  );
};
