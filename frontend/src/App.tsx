import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/user/MainLayout";
import BlankLayout from "./Layouts/user/BlankLayout";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import AdminLayout from "./Layouts/admin/AdminLayout";
import Dashoboard from "./components/admin/Dashoboard";

function App() {
  return (
    <main className="w-screen min-h-screen ">
      <Routes>
        {/* layout with navbar */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* layout without navbar */}
        <Route element={<BlankLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* dashboard routes */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashoboard />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
