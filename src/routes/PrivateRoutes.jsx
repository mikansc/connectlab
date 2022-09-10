import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "@contexts";

export const PrivateRoutes = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
