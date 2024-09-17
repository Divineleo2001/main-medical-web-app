import { LoginAuthSchema } from "@/schemas/shared/auth";
import { z } from "zod";

export type LoginAuthForm = z.infer<typeof LoginAuthSchema>;

interface TokenData {
  token: string;
  expiresIn: number;
}
interface LoginAuthResponse {
  status: number;
  message: string;
  data: TokenData[];
}

enum Role {
  admin = "ADMIN",
  patient = "PATIENT",
  doctor = "DOCTOR",
  technician = "TECHNICIAN",
  user = "USER",
  anonymous = "ANONYMOUS",
}
interface RoleProps {
  role: Role;
}
interface JwtAuthDecodeType {
  ROLE: Role;
  TENANT: string;
  sub: string;
  iat: number; // Issued at (timestamp)
  exp: number; // Expiration time (timestamp)
}

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
