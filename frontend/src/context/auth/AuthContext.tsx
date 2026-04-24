import React, { createContext } from "react";

const AuthContext = createContext<
  | {
      isAuth: boolean;
      setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);
export default AuthContext;
