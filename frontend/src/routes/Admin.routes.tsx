import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { routes } from "./routes";
import AdminDashboard from "../pages/admin/main/AdminDashboard";
import AdminUsers from "../pages/admin/main/AdminUsers";
import AdminProperties from "../pages/admin/main/AdminProperties";
import AdminPayment from "../pages/admin/main/AdminPayment";
import AdminLeases from "../pages/admin/main/AdminLeases";
import AdminBlacklist from "../pages/admin/management/AdminBlacklist";
import AdminMoveOutRequests from "../pages/admin/management/AdminMoveOutRequests";
import AdminVerifyProperties from "../pages/admin/management/AdminVerifyProperties";
import AdminReports from "../pages/admin/management/AdminReports";
import AdminLogs from "../pages/admin/system/AdminLogs";
import AdminSettings from "../pages/admin/system/AdminSettings";
import AdminSupport from "../pages/admin/system/AdminSupport";
import NotFound from "../pages/admin/NotFound";
import AddUser from "../pages/admin/management/UserRegistration";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        {/* Main */}
        <Route path={routes.DASHBOARD} element={<AdminDashboard />} />
        <Route path={routes.USERS} element={<AdminUsers />} />
        <Route path={routes.PROPERTIES} element={<AdminProperties />} />
        <Route path={routes.PAYMENTS} element={<AdminPayment />} />
        <Route path={routes.LEASES} element={<AdminLeases />} />

        {/* Management */}
        <Route path={routes.BLACKLIST} element={<AdminBlacklist />} />
        <Route
          path={routes.MOVE_OUT_REQUESTS}
          element={<AdminMoveOutRequests />}
        />
        <Route
          path={routes.VERIFY_PROPERTIES}
          element={<AdminVerifyProperties />}
        />
        <Route path={routes.REPORTS} element={<AdminReports />} />
        <Route path={routes.ADDUSER} element={<AddUser />} />

        {/* System */}
        <Route path={routes.ADMIN_LOGS} element={<AdminLogs />} />
        <Route path={routes.SETTINGS} element={<AdminSettings />} />
        <Route path={routes.SUPPORT} element={<AdminSupport />} />

        {/* Catch all - redirect to dashboard */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
