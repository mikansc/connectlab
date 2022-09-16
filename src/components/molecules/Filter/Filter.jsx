import { useRef } from "react";

import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Button } from "@atoms";
import { InputField } from "@molecules";

import { StyledButton, StyledContainer, StyledField } from "./Filter.styles";

export const Filter = ({ onChangeFilter }) => {
  const inputRef = useRef();
  const theme = useTheme();

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
          label="Buscar dispositivo"
          placeholder="digite o nome de um dispositivo..."
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </StyledField>
      <StyledButton>
        <Button onClick={handleClear}>Limapr</Button>
      </StyledButton>
    </StyledContainer>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
