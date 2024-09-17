import { getAllUsers } from "@/server/admin/users";
import { UserApiResponse } from "@/types/admin/type";
import type { AxiosError } from "axios";
import { createQuery } from "react-query-kit";

type Response = UserApiResponse;
type Variables = void;

export const useGetAllUsers = createQuery<Response, Variables, AxiosError>({
  queryKey: ["users"],
  fetcher: async () => {
    const data = await getAllUsers();

    return data;
  },
});
