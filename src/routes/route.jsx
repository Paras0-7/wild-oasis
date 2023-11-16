import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Cabins from "../pages/Cabins";
import { NewUsers } from "../pages/Users";
import { Settings } from "../pages/Settings";
import { Account } from "../pages/Account";
import Login from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { AppLayout } from "../ui/AppLayout";
import { Booking } from "../pages/Booking";

export const AppRoutes = function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/bookings/:bookingId" element={<Booking />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/user" element={<NewUsers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
