import PropTypes from "prop-types";
import { StyledImage } from "./Image.styles";

export const Image = ({ src, alt, ...props }) => (
  <StyledImage src={src} alt={alt} {...props} data-testId="app-image" />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
