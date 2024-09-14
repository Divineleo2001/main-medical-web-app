import { z } from "zod";

export const HospitalFormSchema = z.object({
    domainUrl: z.string().url({ message: "Please enter a valid URL" }),
    hospitalName: z.string().min(2, { message: "Hospital name must be at least 2 characters" }),
    hospitalAddress: z.string().min(5, { message: "Address must be at least 5 characters" }),
    contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" }),
    tenantId: z.string().min(1, { message: "Tenant ID is required" }),
    url: z.string().url({ message: "Please enter a valid URL" }),
  })
  