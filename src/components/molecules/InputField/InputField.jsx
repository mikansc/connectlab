import PropTypes from "prop-types";

import { Input, Label } from "@atoms";
import { StyledInputGroup } from "./InputField.styles";

export const InputField = ({ label, ...props }) => {
  return (
    <StyledInputGroup>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...props} />
    </StyledInputGroup>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
