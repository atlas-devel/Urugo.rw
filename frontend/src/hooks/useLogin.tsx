import { useContext, useState } from "react";
import api from "../lib/axios";
import AuthContext from "../context/auth/AuthContext";
import type { AxiosError } from "axios";

function useLogin() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuth } = useContext(AuthContext)!;

  const handleLogin = async (credentials: {
    email?: string;
    phoneNumber?: string;
    password: string;
  }): Promise<
    | {
        success: boolean;
        message: string;
      }
    | undefined
  > => {
    setIsLoading(true);
    try {
      const response = await api.post("/public/auth/login", credentials);
      if (!response.data.success) {
        console.log(response.data.message);
        setError("Login failed. Please check your credentials.");
        return {
          success: false,
          message: "Login failed. Please check your credentials.",
        };
      }
      if (response.status === 200 && response.data.success) {
        setIsAuth(true);
        return {
          success: true,
          message: "Login successful.",
        };
      }
      return {
        success: false,
        message: "Unexpected response from server.",
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError("An error occurred while trying to login.");
      console.error("Login error:", error.response?.data.message || error);
    } finally {
      setIsLoading(false);
    }
  };
  return { handleLogin, error, isLoading };
}
export default useLogin;
