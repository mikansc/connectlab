import { useAppContext } from "@contexts";
import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";

export const Loading = () => {
  const { status } = useAppContext();

  return (
    <Modal open={status.isLoading}>
      <Spinner />
      <Text>Aguarde</Text>
    </Modal>
  );
};
