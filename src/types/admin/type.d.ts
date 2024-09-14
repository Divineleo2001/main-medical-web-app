import * as z from "zod"
import { AdminAuthSchema } from "./schema/admin"


export type AdminAuthForm = z.infer<typeof AdminAuthSchema>

interface AdminAuthResponse {
    status: number;
    message: string;
    data: TokenData[];
  }
  
  interface TokenData {
    token: string;
    expiresIn: number;
  }