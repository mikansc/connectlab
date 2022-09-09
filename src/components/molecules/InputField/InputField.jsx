import PropTypes from "prop-types";

import { Input, Label } from "@atoms";
import { StyledInputGroup } from "./InputField.styles";

export const InputField = ({ label, color, ...props }) => {
  return (
    <StyledInputGroup>
      <Label color={color} htmlFor={props.name}>
        {label}
      </Label>
      <Input {...props} />
    </StyledInputGroup>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
