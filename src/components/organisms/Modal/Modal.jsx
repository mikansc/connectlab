import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { StyledModalBackdrop, StyledModalContent } from "./Modal.styles";

export const Modal = ({ children, backdropColor, zIndex = 1000, open = true }) => {
  if (!open) return;
  return ReactDOM.createPortal(
    <>
      <StyledModalBackdrop color={backdropColor} />
      <StyledModalContent $zIndex={zIndex}>{children}</StyledModalContent>
    </>,
    document.getElementById("portal"),
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  backdropColor: PropTypes.string,
  open: PropTypes.bool,
  zIndex: PropTypes.string,
};
