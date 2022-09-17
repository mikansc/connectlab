import { forwardRef } from "react";
import PropTypes from "prop-types";

import { ErrorMessage, Input, Label } from "@atoms";

import { StyledInputGroup } from "./InputField.styles";

export const InputField = forwardRef(({ label, color, error, ...props }, ref) => {
  return (
    <StyledInputGroup>
      <Label hasError={!!error} color={color} htmlFor={props.name}>
        {label}
      </Label>
      <Input hasError={!!error} {...props} ref={ref} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputGroup>
  );
});

InputField.displayName = "InputField";

InputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
