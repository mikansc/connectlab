import { useAppContext } from "@contexts";
import { getAddressByZipCode } from "@services";
import { StatusTypes } from "@utils";
import { useState } from "react";

export const useFetchAddress = ({ onFound = () => {} }) => {
  const { setStatus } = useAppContext();
  const [address] = useState(null);

  const findByCep = (cep) => {
    setStatus(StatusTypes.loading);
    getAddressByZipCode(cep)
      .then((data) => {
        onFound({ ...data, zipCode: cep });
        setStatus(StatusTypes.success);
      })
      .catch((err) => {
        console.log(err);
        setStatus(StatusTypes.error);
      });
  };

  return {
    findByCep,
    address,
  };
};
