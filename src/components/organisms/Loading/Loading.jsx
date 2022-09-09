import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";
import { useAppContext } from "@contexts";

export const Loading = () => {
  const { loading } = useAppContext();

  return (
    <Modal open={loading}>
      <Spinner />
      <Text>Aguarde</Text>
    </Modal>
  );
};
