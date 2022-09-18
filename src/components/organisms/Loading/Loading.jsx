import { useAppContext } from "@contexts";
import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";

export const Loading = () => {
  const { status } = useAppContext();

  return (
    <Modal open={status.isLoading} zIndex="1100">
      <Spinner />
      <Text>Aguarde</Text>
    </Modal>
  );
};
