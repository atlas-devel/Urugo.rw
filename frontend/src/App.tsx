import AuthProvider from "./context/auth/AuthProvider";
import AppRoutes from "./routes/Admin.routes";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
