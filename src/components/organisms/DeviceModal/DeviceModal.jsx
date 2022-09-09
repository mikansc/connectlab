import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { Modal, DeviceDetails } from "@organisms";

export const DeviceModal = ({ open }) => {
  const theme = useTheme();
  return (
    <Modal backdropColor={theme.colors.black} open={open}>
      <DeviceDetails />
    </Modal>
  );
};

DeviceModal.propTypes = {
  open: PropTypes.bool,
};
