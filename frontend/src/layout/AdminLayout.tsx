import { Outlet } from "react-router-dom";
import Navigation from "../components/admin/common/Navbar/Navbar";
import Sidebar from "../components/admin/common/Sidebar/Sidebar";
import { SidebarProvider } from "../context/sidebar_context/Sidebar_provider";

function AdminLayout() {
  return (
    <SidebarProvider>
      <section className="h-screen max-w-[2000px] mx-auto flex overflow-x-hidden overflow-y-hidden dark:bg-background bg-blue-50/40">
        <Sidebar />
        <div className="flex-1 min-w-0 ">
          <Navigation />
          <main className="relative h-[calc(100vh-80px)] overflow-y-auto mx-auto p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </section>
    </SidebarProvider>
  );
}

export default AdminLayout;
