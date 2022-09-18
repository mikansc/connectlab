import { forwardRef } from "react";
import { StyledInput, StyledSlider, StyledSwitch } from "./Toggle.styles";

export const Toggle = forwardRef((props, ref) => {
  return (
    <StyledSwitch>
      <StyledInput {...props} type="checkbox" ref={ref} />
      <StyledSlider />
    </StyledSwitch>
  );
});

Toggle.displayName = "Toggle";
