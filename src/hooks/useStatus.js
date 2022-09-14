import { useState } from "react";

const StatusTypes = {
  idle: "idle",
  loading: "loading",
  error: "error",
  success: "success",
};

export const useStatus = () => {
  const [situation, setSituation] = useState(StatusTypes.idle);

  const status = {
    isLoading: situation === StatusTypes.loading,
    isSuccess: situation === StatusTypes.success,
    isError: situation === StatusTypes.error,
  };

  const setStatus = {
    loading: () => setSituation(StatusTypes.loading),
    success: () => setSituation(StatusTypes.success),
    error: () => setSituation(StatusTypes.error),
  };

  return {
    status,
    setStatus,
  };
};
