import React from "react";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export default BlankLayout;
