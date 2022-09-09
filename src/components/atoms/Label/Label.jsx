import PropTypes from "prop-types";
import { StyledLabel } from "./Label.styles";

export const Label = ({ children, color }) => {
  return <StyledLabel color={color}>{children}</StyledLabel>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};
