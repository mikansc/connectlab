import { useEffect, useState } from "react";
import { useAppContext } from "@contexts";
import { getAllLocals } from "@services";

export const useFetchLocals = () => {
  const { setStatus, status } = useAppContext();

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    setStatus.loading();
    getAllLocals()
      .then((data) => {
        setLocals(data);
        setStatus.success();
      })
      .catch((e) => {
        console.error(e.message);
        setStatus.error();
      });
  }, [setStatus]);

  return {
    locals,
    isLoading: status.isLoading,
  };
};
