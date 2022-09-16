/* eslint-disable no-unused-vars */
import { useTheme } from "styled-components";

import { Button } from "@atoms";
import { InputField } from "@molecules";

import { StyledButton, StyledContainer, StyledField } from "./Filter.styles";

export const Filter = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledField>
        <InputField
          name="search"
          color={theme.colors.text.default}
          label="Buscar dispositivo"
          placeholder="digite o nome de um dispositivo..."
        />
      </StyledField>
      <StyledButton>
        <Button>Buscar</Button>
      </StyledButton>
    </StyledContainer>
  );
};
