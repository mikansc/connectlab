import { Outlet } from "react-router-dom";
import { DevicesProvider } from "@contexts";

export const DashboardRoutes = () => {
  return (
    <DevicesProvider>
      <Outlet />
    </DevicesProvider>
  );
};
