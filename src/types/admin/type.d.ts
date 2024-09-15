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

interface JwtAuthDecodeType {
  ROLE: string;
  TENANT: string;
  sub: string;
  iat: number;  // Issued at (timestamp)
  exp: number;  // Expiration time (timestamp)
}
// export interface JwtTokenDecodeType = {

// }

// Hosptals type


// Define the type for the response object
interface Hospital {
  createdBy: string;
  createdDate: string; // Consider using Date type if you need to work with actual Date objects
  lastModifiedBy: string;
  lastModifiedDate: string; // Same as above, Date type might be better
  id: number;
  domainUrl: string;
  hospitalName: string;
  hospitalAddress: string;
  contactNumber: string;
  tenantId: string;
  url: string;
}

// Define the type for the response object
interface HospitalResponse {
  status: number;
  message: string;
  data: Hospital[];
}