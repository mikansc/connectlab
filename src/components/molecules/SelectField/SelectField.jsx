import PropTypes from "prop-types";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { Select, Label, ErrorMessage } from "@atoms";

import { StyledInputGroup } from "./SelectField.styles";

export const SelectField = forwardRef(({ label, options = [], color, error, ...props }, ref) => {
  const { t } = useTranslation();
  return (
    <StyledInputGroup>
      <Label hasError={!!error} color={color} htmlFor={props.name}>
        {label}
      </Label>
      <Select hasError={!!error} {...props} ref={ref}>
        <option value="">{t("input.default_select")}</option>
        {options.map((option, idx) => {
          const value = option.id ? option.id : option;
          const label = option.title ? option.title : option;
          return (
            <option key={`${value}-${idx}`} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputGroup>
  );
});

SelectField.displayName = "SelectField";

SelectField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  options: PropTypes.array,
};
