import { AuthProps, Role } from "@/types/admin/type";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthProps>({
  setAuthState: () => {},
  onLogout: async () => {},
});

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
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
    setAuthState({
      token: null,
      authenticated: false,
      role: Role.none,
    });
  };

  const value = {
    onLogout: Logout,
    
    authState,
    setAuthState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
