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
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useGetAllHospitals } from "@/api/shared/get-hospitals";
import {  LoginAuthForm } from "@/types/shared/type";
import { LoginAuthSchema } from "@/schemas/shared/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetUserToken } from "@/api/shared/use-get-user-token";

const UserSignIn = () => {
  const { data } = useGetAllHospitals();
 

  const { toast } = useToast();

  const router = useRouter();
  const { mutate: getUserToken } = useGetUserToken();
  const form = useForm<LoginAuthForm>({
    resolver: zodResolver(LoginAuthSchema),
    defaultValues: {
      username: "",
      password: "",
      hospitalId: "",
    },
  });

  const handleSubmit = async (values: LoginAuthForm) => {
    getUserToken(
      {
        username: values.username,
        password: values.password,
        hospitalId: values.hospitalId,
      },
      {
        onSuccess: (data) => {
          if (data.status == 201) {
            // const decoded: JwtAuthDecodeType = jwtDecode(data.data[0].token);

            if (values.hospitalId) {
              axios.defaults.headers.common["X-PrivateTenant"] =
                values.hospitalId;
            }
            toast({
              title: `${data.status} Success`,
              description: data.message,
            });
          }
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.data[0].token}`;

          router.push("/dashboard");
        },

        onError: (error) => {
          toast({
            title: `Internal server Error ${error.name}`,
            description: "Please try again ",
            variant: "destructive",
          });
        },
      }
    );
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
              <FormField
                control={form.control}
                name="hospitalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hospital</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a hospital" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.data.map((hospital) => (
                          <SelectItem
                            key={hospital.tenantId}
                            value={hospital.tenantId.toString()}
                          >
                            {hospital.hospitalName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
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

export default UserSignIn;
