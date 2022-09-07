import PropTypes from "prop-types";

import { Image } from "@atoms";

import { StyledAvatarWrapper } from "./Avatar.styles";

export const Avatar = ({ imageUrl, name, size }) => {
  return (
    <StyledAvatarWrapper size={size}>
      <Image src={imageUrl} alt={name} />
    </StyledAvatarWrapper>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
