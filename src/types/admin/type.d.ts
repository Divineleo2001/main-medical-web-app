import * as z from "zod";
import { AdminAuthSchema } from "./schema/admin";
import { HospitalFormSchema } from "@/schemas/admin/hospitals";

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

export const HospitalFormTypes = z.infer<typeof HospitalFormSchema>;

interface HospitalDataResponse {
  status: number;
  message: string;
  data: HospitalData[];
}

interface HospitalData {
  createdBy: string;
  createdDate: string;  // Date string in ISO format
  lastModifiedBy: string;
  lastModifiedDate: string;  // Date string in ISO format
  id: number;
  domainUrl: string;
  hospitalName: string;
  hospitalAddress: string;
  contactNumber: string;
  tenantId: string;
  url: string;
}