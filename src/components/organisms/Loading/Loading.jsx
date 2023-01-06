import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { useAppContext } from "@contexts";
import { Spinner, Text } from "@atoms";
import { Modal } from "@organisms";

export const Loading = () => {
  const { status } = useAppContext();
  const { t } = useTranslation();

  return (
    <Modal open={status.isLoading} zIndex="1100">
      <Spinner />
      <TextContainer>
        <Text>{t("misc.wait")}</Text>
      </TextContainer>
    </Modal>
  );
};

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;
