import { AuthProps, Role } from "@/types/admin/type";
import axios from "axios";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  authState: {
    token: string | null;
    authenticated: boolean;
    role: Role;
  };
  setAuthState: React.Dispatch<React.SetStateAction<{
    token: string | null;
    authenticated: boolean;
    role: Role;
  }>>;
  onLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean;
    role: Role;
  }>({
    token: null,
    authenticated: false,
    role: Role.none,
  });

  const Logout = async () => {
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("authToken");
    setAuthState({
      token: null,
      authenticated: false,
      role: Role.none,
    });
  };

  const value = {
    authState,
    setAuthState,
    onLogout: Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
