import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Select, Label } from "@atoms";

import { StyledInputGroup } from "./SelectField.styles";

export const SelectField = forwardRef(({ label, options = [], color, ...props }, ref) => {
  return (
    <StyledInputGroup>
      <Label color={color} htmlFor={props.name}>
        {label}
      </Label>
      <Select {...props} ref={ref}>
        {options.map((option) => (
          <option key={option} value={option.id ? option.id : option}>
            {option.title ? option.title : option}
          </option>
        ))}
      </Select>
    </StyledInputGroup>
  );
});

SelectField.displayName = "SelectField";

const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const optionType = PropTypes.shape({
  title: PropTypes.string,
  id: idType,
});

const optionsType = PropTypes.oneOfType([PropTypes.arrayOf(optionType), PropTypes.string]);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  options: optionsType,
};
