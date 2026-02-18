import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/user/MainLayout";
import BlankLayout from "./components/Layouts/user/BlankLayout";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";

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
      </Routes>
    </main>
  );
}

export default App;
