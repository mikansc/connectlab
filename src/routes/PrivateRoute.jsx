import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "@contexts";

export const PrivateRoute = () => {
  // TODO - implement authentication logic
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
