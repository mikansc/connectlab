import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";

import { Dashboard, Landing, DeviceList, UserCreate, UserUpdate, UserDetails } from "@pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<UserCreate />} />
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<UserDetails />} />
          <Route path="profile/edit" element={<UserUpdate />} />
          <Route path="devices" element={<DeviceList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
