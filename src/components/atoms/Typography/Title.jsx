import PropTypes from "prop-types";

import { StyledHeading } from "./Typography.styles";

export const Title = ({ children, as, align }) => {
  return (
    <StyledHeading as={as} align={align}>
      {children}
    </StyledHeading>
  );
};

Title.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["center", "left", "right"]),
};
