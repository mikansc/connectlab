import { forwardRef } from "react";

import { StyledInput } from "./Input.styles";

export const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.displayName = "Input";
