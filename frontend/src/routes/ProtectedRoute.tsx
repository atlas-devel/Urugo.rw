import { useContext, type ReactNode } from "react";
import AuthContext from "../context/auth/AuthContext";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuth } = useContext(AuthContext)!;
  console.log(isAuth);

  if (!isAuth) {
    return <div>You must be logged in to view this page.</div>;
  }
  return children;
}

export default ProtectedRoute;
