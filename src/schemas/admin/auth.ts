import { z } from "zod";

const AdminAuthSchema = z.object({
    username: z.string(),
    password: z.string().min(3),
  });
  

  export { AdminAuthSchema }