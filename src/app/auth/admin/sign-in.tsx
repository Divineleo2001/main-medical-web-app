"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  AdminAuthForm,
  AdminAuthResponse,
  JwtAuthDecodeType,
} from "@/types/admin/type";
import { AdminAuthLogin } from "@/server/admin/auth";
import { AdminAuthSchema } from "@/schemas/admin/auth";
import { jwtDecode } from "jwt-decode";
import { useToast } from "@/hooks/use-toast";
import { useGetToken } from "@/api/admin/use-get-token";
// import { SignedInUser } from "@/server_actions/(auth)/signIn";
// import { signInForm } from "@/inferedTypes";
// import { signInSchema } from "@/formSchemas";
const SignIn = () => {
  const { toast } = useToast();

  const router = useRouter();

  const { mutate: getAdminToken } = useGetToken();
  const form = useForm<AdminAuthForm>({
    resolver: zodResolver(AdminAuthSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (values: AdminAuthForm) => {
    getAdminToken(
      {
        username: values.username,
        password: values.password,
      },
      {
        onSuccess: (data) => {
          if (data.status == 201) {
            toast({
              title: `${data.status} Success`,
              description: data.message,
            });
          }
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.data[0].token}`
          router.push("/dashboard")
        },

        onError: (error) => {
          console.log(error);
        },
      }
    );

    // try {
    //   const response: AdminAuthResponse = await AdminAuthLogin(values);
    //   console.log(response);

    //   const decoded = jwtDecode(response.data[0].token);

    //   if (response.status == 201) {
    //     console.log("success");
    //     toast({
    //       title: `${response.status} Success`,
    //       description: response.message,
    //     });
    //   }

    //   if (response.status == 500) {
    //     toast({
    //       title: "Error - 500",
    //       description: "Internal Server Error",
    //     });
    //   }

    //   const token = response.data[0].token;
    //   const decodedtoken: JwtAuthDecodeType = jwtDecode(token);

    //   console.log(decodedtoken.ROLE);

    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `Bearer ${response.data[0].token}`;
    //   //   const decoded = jwtDecode(response.)

    //   //   router.push("/dashboard/portal")
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col items-center justify-center h-screen bg-background"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default SignIn;
