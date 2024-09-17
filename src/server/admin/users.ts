"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
const url = process.env.BACKEND_URL + "/api/users";

export const getAllUsers = async () => {
    const authToken = cookies().get("token")?.value;
  try {
    const { data } = await axios.get(url,{
        headers: {
            "X-PrivateTenant": "tenant1",
            "Authorization": `Bearer ${authToken}`
        }
    });

    return data;
  } catch (error) {
    return error as AxiosError;
  }
};
