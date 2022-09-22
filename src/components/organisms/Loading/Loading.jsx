import { useAppContext } from "@contexts";
import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";
import styled from "styled-components";

export const Loading = () => {
  const { status } = useAppContext();

  return (
    <Modal open={status.isLoading} zIndex="1100">
      <Spinner />
      <TextContainer>
        <Text>Aguarde</Text>
      </TextContainer>
    </Modal>
  );
};

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;
