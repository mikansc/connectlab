import PropTypes from "prop-types";

import { Header } from "@organisms";

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
