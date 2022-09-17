import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast {
    font-family: "Lato", Arial, Helvetica, sans-serif;
  }
  & .Toastify__toast-theme--light.Toastify__toast--default {
    color: ${({ theme }) => theme.colors.main.default};
  }
  & .Toastify__toast-theme--light.Toastify__toast--success {
    background-color: ${({ theme }) => theme.colors.background.success};
    color: ${({ theme }) => theme.colors.success};
  }
  & .Toastify__toast-theme--light.Toastify__toast--error {
    color: ${({ theme }) => theme.colors.error};
  }
  & .Toastify__toast-theme--light.Toastify__toast--warning {
    color: ${({ theme }) => theme.colors.warning};
  }
  & .Toastify__toast-theme--light.Toastify__toast--info {
    color: ${({ theme }) => theme.colors.info};
  }
`;
