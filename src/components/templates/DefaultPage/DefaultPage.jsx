import { Header } from "@organisms";
import PropTypes from "prop-types";
import { StyledContainer } from "./DefaultPage.styles";

export const DefaultPage = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
};
