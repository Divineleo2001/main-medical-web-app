"use client";

import { useAuth } from "@/context/AuthContextProvider";
import { deleteCookie } from "@/server/shared/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const SignOut = () => {
  const router = useRouter();
  const form = useForm();
  const { setAuth } = useAuth();

  const handleSubmit = async () => {
    // localStorage.clear()
    axios.defaults.headers.common["Authorization"] = "";
    axios.defaults.headers.common["X-PrivateTenant"] = "";
    setAuth({ token: null, role: null });
    await deleteCookie();
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default SignOut;
