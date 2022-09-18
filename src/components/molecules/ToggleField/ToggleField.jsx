import { forwardRef } from "react";
import PropTypes from "prop-types";

import { ErrorMessage, Toggle } from "@atoms";

import { StyledInputGroup, StyledToggleLabel } from "./ToggleField.styles";

export const ToggleField = forwardRef(({ label, color, error, name, ...props }, ref) => {
  return (
    <StyledInputGroup>
      <StyledToggleLabel hasError={!!error} color={color} htmlFor={name}>
        {label}
        <Toggle {...props} id={name} ref={ref} />
      </StyledToggleLabel>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputGroup>
  );
});

ToggleField.displayName = "InputField";

ToggleField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
