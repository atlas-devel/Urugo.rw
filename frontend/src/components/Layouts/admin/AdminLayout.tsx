import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export default AdminLayout;
