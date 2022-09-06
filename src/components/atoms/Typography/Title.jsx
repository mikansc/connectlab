import PropTypes from "prop-types";

import { StyledHeading } from "./Typography.styles";

export const Title = ({ children, as }) => {
  return <StyledHeading as={as}>{children}</StyledHeading>;
};

Title.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
