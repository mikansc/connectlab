import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const StatusTypes = {
  idle: "idle",
  loading: "loading",
  error: "error",
  success: "success",
};

export const useStatus = () => {
  const [situation, setSituation] = useState(StatusTypes.idle);

  const status = useMemo(
    () => ({
      isLoading: situation === StatusTypes.loading,
      isSuccess: situation === StatusTypes.success,
      isError: situation === StatusTypes.error,
    }),
    [situation],
  );

  const setStatus = useMemo(
    () => ({
      loading: () => setSituation(StatusTypes.loading),
      success: (msg) => {
        if (msg) {
          toast.success(msg);
        }
        setSituation(StatusTypes.success);
      },
      error: (msg) => {
        if (msg) {
          toast.error(msg);
        }
        setSituation(StatusTypes.error);
      },
    }),
    [],
  );

  return {
    status,
    setStatus,
  };
};
