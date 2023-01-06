import PropTypes from "prop-types";
import { useRef } from "react";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";

import { Button } from "@atoms";
import { InputField } from "@molecules";

import { StyledButton, StyledContainer, StyledField } from "./Filter.styles";

export const Filter = ({ onChangeFilter }) => {
  const inputRef = useRef();
  const theme = useTheme();
  const { t } = useTranslation();

  const handleClear = () => {
    inputRef.current.value = null;
    onChangeFilter(null);
  };

  return (
    <StyledContainer>
      <StyledField>
        <InputField
          ref={inputRef}
          name="search"
          color={theme.colors.text.default}
          label={t("filter.label")}
          placeholder={t("filter.placeholder")}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </StyledField>
      <StyledButton>
        <Button onClick={handleClear}>{t("filter.clear")}</Button>
      </StyledButton>
    </StyledContainer>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
