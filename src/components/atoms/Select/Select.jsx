import { forwardRef } from "react";
import PropTypes from "prop-types";

import { StyledInputSelect } from "./Select.styles";

export const Select = forwardRef((props, ref) => {
  return (
    <StyledInputSelect {...props} ref={ref}>
      {props.children}
    </StyledInputSelect>
  );
});

Select.displayName = "Select";

Select.propTypes = {
  children: PropTypes.node.isRequired,
};
