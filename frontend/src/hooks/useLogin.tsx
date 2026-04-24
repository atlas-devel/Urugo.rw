import { useState } from "react";
import api from "../lib/axios";

function useLogin() {
  const [error, setError] = useState<String | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      return response.data;
    } catch (error: any) {
      setError("An error occurred while trying to login.");
      console.error("Login error:", error.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { handleLogin, error, isLoading };
}
export default useLogin;
