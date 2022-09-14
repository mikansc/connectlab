import { useMemo, useState } from "react";

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
      success: () => setSituation(StatusTypes.success),
      error: () => setSituation(StatusTypes.error),
    }),
    [],
  );

  return {
    status,
    setStatus,
  };
};
