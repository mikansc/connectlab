import PropTypes from "prop-types";
import { StyledContainer } from "./Pill.styles";

export const Pill = ({ children }) => <StyledContainer>{children}</StyledContainer>;

Pill.propTypes = {
  children: PropTypes.string.isRequired,
};
