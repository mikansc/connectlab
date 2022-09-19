import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledInputSelect } from "./Select.styles";

export const Select = forwardRef((props, ref) => {
  return (
    <StyledInputSelect {...props} $hasError={props.hasError} ref={ref}>
      {props.children}
    </StyledInputSelect>
  );
});

Select.displayName = "Select";

Select.propTypes = {
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
};
