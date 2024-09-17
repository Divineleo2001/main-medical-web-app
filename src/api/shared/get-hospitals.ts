import { getAllHospitals } from '@/server/admin/hospitals';
import { HospitalResponse } from '@/types/shared/type';
import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';


type Response = HospitalResponse;
type Variables = void;

export const useGetAllHospitals = createQuery<Response, Variables, AxiosError>({
  queryKey: ['hospitals'],
  fetcher:  async () => {
    const data = await getAllHospitals()
    return data
  }
});
