"use server";

import { AdminAuthForm } from "@/types/admin/type";
import axios, { AxiosError } from "axios";



export const AdminAuthLogin = async (values: AdminAuthForm) => {
  const AdminAuthenticateUrl = process.env.BACKEND_URL + "/auth/token";

  try {
    const { data } = await axios.post(AdminAuthenticateUrl, {
      username: values.username,
      password: values.password,
    });

    return data;
  } catch (error) {
    return error as AxiosError;
  }
};
