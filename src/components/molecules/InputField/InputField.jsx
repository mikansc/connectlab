import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Input, Label } from "@atoms";

import { StyledInputGroup } from "./InputField.styles";

export const InputField = forwardRef(({ label, color, ...props }, ref) => {
  return (
    <StyledInputGroup>
      <Label color={color} htmlFor={props.name}>
        {label}
      </Label>
      <Input {...props} ref={ref} />
    </StyledInputGroup>
  );
});

InputField.displayName = "InputField";

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
