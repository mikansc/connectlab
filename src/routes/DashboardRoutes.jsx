import { Outlet } from "react-router-dom";
import { DevicesProvider, ModalProvider } from "@contexts";

export const DashboardRoutes = () => {
  return (
    <DevicesProvider>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </DevicesProvider>
  );
};
