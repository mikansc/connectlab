import { useAppContext } from "@contexts";
import { getAddressByZipCode } from "@services";
import { useState } from "react";

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
        console.log(err);
        setStatus.error();
      });
  };

  return {
    findByCep,
    address,
  };
};
