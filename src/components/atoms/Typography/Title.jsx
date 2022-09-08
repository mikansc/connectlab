import PropTypes from "prop-types";

import { StyledHeading } from "./Typography.styles";

export const Title = ({ children, as, align, variant = "main" }) => {
  return (
    <StyledHeading as={as} align={align} variant={variant}>
      {children}
    </StyledHeading>
  );
};

Title.propTypes = {
  as: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["main", "secondary"]),
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["center", "left", "right"]),
};
