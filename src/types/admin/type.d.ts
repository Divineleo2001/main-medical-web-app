import { AdminAuthSchema } from "@/schemas/admin/auth";
import * as z from "zod";

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

interface Users{
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  username: string;
  password: string;
  gender: string;
  userCategoryId: number;
  email: string;
  phoneNumber: string;
  enabled: boolean;
  authorities: any[]; // Assuming authorities is an array but not provided in detail
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

interface UserApiResponse {
  status: number;
  message: string;
  data: Users[];
}

