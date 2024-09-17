import { UserLoginAuth } from '@/server/shared/auth';
import { LoginAuthForm, LoginAuthResponse } from '@/types/shared/type';
import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';


type Variables = LoginAuthForm;
type Response = LoginAuthResponse;

export const useGetUserToken = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => UserLoginAuth(variables)
});