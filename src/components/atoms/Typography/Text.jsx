import PropTypes from "prop-types";

import { StyledText } from "./Typography.styles";

export const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
