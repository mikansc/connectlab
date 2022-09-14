import { useCallback, useState } from "react";

export const useModal = () => {
  const [data, setData] = useState(null);

  const open = useCallback((modalData) => {
    setData(modalData);
  }, []);

  const close = useCallback(() => {
    setData(null);
  }, []);

  const isOpen = !!data;

  return { isOpen, open, close, data };
};
