import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {
  DeviceCreate,
  DeviceDetails,
  DeviceList,
  Home,
  Landing,
  UserCreate,
  UserDetails,
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
          <Route path="devices">
            <Route index element={<DeviceList />} />
            <Route path=":deviceId" element={<DeviceDetails />} />
            <Route path="new" element={<DeviceCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
