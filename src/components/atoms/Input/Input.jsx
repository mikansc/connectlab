import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledInput } from "./Input.styles";

export const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} $hasError={props.hasError} ref={ref} />;
});

Input.displayName = "Input";

Input.propTypes = {
  hasError: PropTypes.bool,
};
