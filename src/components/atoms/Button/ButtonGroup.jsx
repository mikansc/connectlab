import PropTypes from "prop-types";
import { StyledButtons } from "./ButtonGroup.styles";

export const ButtonGroup = ({ children }) => {
  return <StyledButtons>{children}</StyledButtons>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
