import PropTypes from "prop-types";

import { StyledErrorMessage } from "./Typography.styles";

export const ErrorMessage = ({ children }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
