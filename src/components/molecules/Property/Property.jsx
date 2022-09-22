import PropTypes from "prop-types";

import {
  StyledPropertyContainer,
  StyledPropertyTitle,
  StyledPropertyValue,
} from "./Property.styles";

export const Property = ({ title, value, children }) => {
  return (
    <StyledPropertyContainer>
      <StyledPropertyTitle>{title}: </StyledPropertyTitle>
      <StyledPropertyValue>{children || value}</StyledPropertyValue>
    </StyledPropertyContainer>
  );
};

Property.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
};
