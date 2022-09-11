/* eslint-disable react/prop-types */
import React, { useState } from "react";

const context = React.createContext(null);
const ContextProvider = context.Provider;

export const ModalProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const openWith = (modalData) => {
    if (!modalData) setData(null);
    setData(modalData);
  };

  const closeModal = () => {
    setData(null);
  };

  const toggleModal = () => {
    if (data) setData(null);
    setData("opened");
  };

  const isOpen = !!data;

  return (
    <ContextProvider value={{ isOpen, openWith, toggleModal, closeModal, data }}>
      {children}
    </ContextProvider>
  );
};

export const useModalContext = () => {
  const ctx = React.useContext(context);
  if (!ctx) throw new Error("useModalContext can only be used inside ModalProvider");
  return ctx;
};
