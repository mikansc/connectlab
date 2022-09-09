import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import { StyledModalBackdrop, StyledModalContent } from "./Modal.styles";

export const Modal = ({ children, backdropColor, open = true }) => {
  if (!open) return;
  return ReactDOM.createPortal(
    <>
      <StyledModalBackdrop color={backdropColor} />
      <StyledModalContent>{children}</StyledModalContent>
    </>,
    document.getElementById("portal"),
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  backdropColor: PropTypes.string.isRequired,
  open: PropTypes.bool,
};
