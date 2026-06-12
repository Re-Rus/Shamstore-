import { useState } from "react";
import { authService } from "../services/authService";

export const useAuth = () => {

  const [user, setUser] = useState(
    authService.getCurrentUser()
  );


  const login = async (
    email: string,
    password: string
  ) => {

    const loggedUser =
      await authService.login({
        email,
        password,
      });

    setUser(loggedUser);
    
    return loggedUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };
  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

};