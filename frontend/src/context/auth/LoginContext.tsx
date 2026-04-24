import { createContext } from "react";

const LoginContext = createContext<
  { success: string; message: String } | undefined
>(undefined);

export default LoginContext;
