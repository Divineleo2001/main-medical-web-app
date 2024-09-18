import { createHospital } from "@/server/admin/hospitals";
import { HospitalPostResponse } from "@/types/admin/type";
import { HospitalAuthForm } from "@/types/shared/type";
import type { AxiosError } from "axios";
import { createMutation } from "react-query-kit";

type Variables = HospitalAuthForm;
type Response = HospitalPostResponse;

export const useCreateHospitals = createMutation<
  Response,
  Variables,
  AxiosError
>({
  mutationFn: async (variables) => {
    const data = await createHospital(variables);
    return data;
  },
});
