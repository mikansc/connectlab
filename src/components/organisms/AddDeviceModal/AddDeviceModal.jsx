import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Modal, NewDevice } from "@organisms";

export const AddDeviceModal = ({ open }) => {
  const theme = useTheme();
  return (
    <Modal backdropColor={theme.colors.black} open={open}>
      <NewDevice />
    </Modal>
  );
};

AddDeviceModal.propTypes = {
  open: PropTypes.bool,
};
