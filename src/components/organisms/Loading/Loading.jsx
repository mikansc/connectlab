import PropTypes from "prop-types";

import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";

export const Loading = ({ show }) => {
  return (
    <Modal open={show}>
      <Spinner />
      <Text>Aguarde</Text>
    </Modal>
  );
};

Loading.propTypes = {
  show: PropTypes.bool,
};
