import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";

import {
  Home,
  Landing,
  DeviceList,
  UserCreate,
  UserUpdate,
  UserDetails,
  DeviceCreate,
} from "@pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<UserCreate />} />
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<UserDetails />} />
          <Route path="profile/edit" element={<UserUpdate />} />
          <Route path="devices">
            <Route index element={<DeviceList />} />
            <Route path="new" element={<DeviceCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
