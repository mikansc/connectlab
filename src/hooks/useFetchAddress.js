import { useState } from "react";

import { useAppContext } from "@contexts";
import { getAddressByZipCode } from "@services";

export const useFetchAddress = ({ onFound = () => {} }) => {
  const { setStatus } = useAppContext();
  const [address] = useState(null);

  const findByCep = (cep) => {
    setStatus.loading();
    getAddressByZipCode(cep)
      .then((data) => {
        onFound({ ...data, zipCode: cep });
        setStatus.success();
      })
      .catch((err) => {
        console.error(err);
        setStatus.error();
      });
  };

  return {
    findByCep,
    address,
  };
};
