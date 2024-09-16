import * as z from "zod";
import { AdminAuthSchema } from "./schema/admin";

// admin auth response and Varibles type
export type AdminAuthForm = z.infer<typeof AdminAuthSchema>;

interface AdminAuthResponse {
  status: number;
  message: string;
  data: TokenData[];
}
interface TokenData {
  token: string;
  expiresIn: number;
}
interface AuthProps {
  authState?: {
    token: string | null;
    authenticated: boolean;
    role: Role | null;
  };

  onLogout: () => Promise<void>;
  setAuthState: React.Dispatch<React.SetStateAction<any>>;
}

export enum Role {
  Admin = "admin",
  Patient = "patient",
  Doctor = "doctor",
  none = none,
}

interface JwtAuthDecodeType {
  ROLE: string;
  TENANT: string;
  sub: string;
  iat: number;  // Issued at (timestamp)
  exp: number;  // Expiration time (timestamp)
}
// export interface JwtTokenDecodeType = {

// }