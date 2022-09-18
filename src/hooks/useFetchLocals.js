import { useEffect, useState } from "react";
import { useAppContext } from "@contexts";
import { getAllLocals } from "@services";

export const useFetchLocals = () => {
  const [locals, setLocals] = useState([]);
  const { setStatus } = useAppContext();

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
  };
};
