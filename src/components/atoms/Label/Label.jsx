import PropTypes from "prop-types";

import { StyledLabel } from "./Label.styles";

export const Label = ({ children, color, htmlFor, hasError = false }) => {
  return (
    <StyledLabel $hasError={hasError} $color={color} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  color: PropTypes.string,
};
