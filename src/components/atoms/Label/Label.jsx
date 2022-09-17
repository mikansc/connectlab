import PropTypes from "prop-types";

import { StyledLabel } from "./Label.styles";

export const Label = ({ children, color, hasError = false }) => {
  return (
    <StyledLabel $hasError={hasError} color={color}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
  color: PropTypes.string,
};
