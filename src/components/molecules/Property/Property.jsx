import PropTypes from "prop-types";
import { StyledContainer, StyledTitle, StyledValue } from "./Property.styles";

export const Property = ({ title, value }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}: </StyledTitle>
      <StyledValue>{value}</StyledValue>
    </StyledContainer>
  );
};

Property.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
