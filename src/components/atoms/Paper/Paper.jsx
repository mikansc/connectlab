import PropTypes from "prop-types";

import { StyledContainer } from "./Paper.styles";

export const Paper = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};
