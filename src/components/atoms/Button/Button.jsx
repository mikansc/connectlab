import PropTypes from "prop-types";
import { forwardRef } from "react";

import { StyledButton } from "./Button.styles";

export const Button = forwardRef(({ children, fullWidth, ...props }, ref) => {
  return (
    <StyledButton $fullWidth={fullWidth} ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};
