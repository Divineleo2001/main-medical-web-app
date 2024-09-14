'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast'


const formSchema = z.object({
  domainUrl: z.string().url({ message: "Please enter a valid URL" }),
  hospitalName: z.string().min(2, { message: "Hospital name must be at least 2 characters" }),
  hospitalAddress: z.string().min(5, { message: "Address must be at least 5 characters" }),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" }),
  tenantId: z.string().min(1, { message: "Tenant ID is required" }),
  url: z.string().url({ message: "Please enter a valid URL" }),
})

export default function HospitalForm() {
const {toast} = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      domainUrl: "",
      hospitalName: "",
      hospitalAddress: "",
      contactNumber: "",
      tenantId: "",
      url: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Hospital created",
      description: "The hospital entity has been successfully created.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="domainUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domain URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription>
                The domain URL for the hospital.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hospitalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital Name</FormLabel>
              <FormControl>
                <Input placeholder="St. Mary's Hospital" {...field} />
              </FormControl>
              <FormDescription>
                The name of the hospital.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hospitalAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Medical Center Blvd, City, State, ZIP" {...field} />
              </FormControl>
              <FormDescription>
                The full address of the hospital.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="+1234567890" {...field} />
              </FormControl>
              <FormDescription>
                The contact number for the hospital.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tenantId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tenant ID</FormLabel>
              <FormControl>
                <Input placeholder="tenant-123" {...field} />
              </FormControl>
              <FormDescription>
                The unique identifier for the tenant.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://hospital-website.com" {...field} />
              </FormControl>
              <FormDescription>
                The website URL for the hospital.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Hospital</Button>
      </form>
    </Form>
  )
}