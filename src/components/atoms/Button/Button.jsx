import PropTypes from "prop-types";
import { forwardRef } from "react";

import { StyledButton } from "./Button.styles";

export const Button = forwardRef(({ children, fullWidth, onClick, ...props }, ref) => {
  return (
    <StyledButton $fullWidth={fullWidth} onClick={onClick} ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};
