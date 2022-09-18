import styled, { css } from "styled-components";

function getAvatarSize(avatarString) {
  switch (avatarString) {
    case "small":
      return "25px";
    case "medium":
      return "50px";
    case "large":
      return "100px";
    default:
      return "50px";
  }
}

export const StyledAvatarWrapper = styled.div`
  ${({ size }) => css`
    max-width: ${getAvatarSize(size)};
    max-height: ${getAvatarSize(size)};
    border-radius: ${getAvatarSize(size)};
  `}
  overflow: hidden;
  display: block;

  border: 2px solid ${({ theme }) => theme.colors.white};
  outline: 2px solid ${({ theme }) => theme.colors.main.default};
`;
