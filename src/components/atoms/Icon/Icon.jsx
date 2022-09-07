import PropTypes from "prop-types";
import { StyledSpan } from "./Icon.styles";

export const Icon = ({ name, ...props }) => {
  return (
    <StyledSpan className="material-icons" {...props}>
      {name}
    </StyledSpan>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
