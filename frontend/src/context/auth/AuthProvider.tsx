import { useState, type ReactNode } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  return <AuthContext value={{ isAuth, setIsAuth }}>{children}</AuthContext>;
};
export default AuthProvider;