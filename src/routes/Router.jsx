import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Landing, DeviceList, UserCreate, UserUpdate, UserProfile } from "@pages";
import { DashboardRoutes, PrivateRoutes } from "./";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<UserCreate />} />

        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<DashboardRoutes />}>
            <Route index element={<Dashboard />} />
            <Route path="devices" element={<DeviceList />} />
            <Route path="profile" element={<UserProfile />}>
              <Route path="edit" element={<UserUpdate />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
