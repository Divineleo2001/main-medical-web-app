import { AdminAuthLogin } from '@/server/admin/auth';
import { AdminAuthForm, AdminAuthResponse } from '@/types/admin/type';
import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';



type Variables = AdminAuthForm;
type Response = AdminAuthResponse;

export const useGetToken = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => await AdminAuthLogin(variables)
});