"use server";

import { JwtAuthDecodeType, LoginAuthForm } from "@/types/shared/type";
import { TokensIcon } from "@radix-ui/react-icons";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const UserLoginAuth = async (values: LoginAuthForm) => {
  const url = process.env.BACKEND_URL + "/auth/token";
  try {
    const { data } = await axios.post(url, {
      username: values.username,
      password: values.password,
    });
    const decoded: JwtAuthDecodeType = jwtDecode(data.data[0].token);
    await cookieLogin({
      token: data.data[0].token,
      role: decoded.ROLE,
    });
    // await setTenant(values.hospitalId);

    return data;
  } catch (error) {
    return error as AxiosError;
  }
};

export async function cookieLogin({
  token,
  role,

}: {
  token: string;
  role: string;
}) {
  cookies().set({
    name: "role",
    value: role,
  });
  cookies().set({
    name: "token",
    value: token,
  });
}
export async function setTenant(tenant: string) {
  cookies().set({
    name: "tenant",
    value: tenant,
  });
}
export async function deleteCookie() {
  cookies().delete("role");
  cookies().delete("token");
}
