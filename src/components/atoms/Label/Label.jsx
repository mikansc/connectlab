import PropTypes from "prop-types";
import { StyledLabel } from "./Label.styles";

export const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
