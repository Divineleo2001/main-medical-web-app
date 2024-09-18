'use client'

import { useState, useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { PlusCircle, Trash2 } from 'lucide-react'

const treatmentSchema = z.object({
  treatmentName: z.string().min(1, "Treatment name is required"),
  treatmentDescription: z.string().min(1, "Treatment description is required"),
})

const formSchema = z.object({
  departmentName: z.string().min(1, "Department name is required"),
  description: z.string().min(1, "Description is required"),
  serviceId: z.number().min(1, "Service ID is required"),
  baseImgUrl: z.string().url("Must be a valid URL"),
  iconImgUrl: z.string().url("Must be a valid URL"),
  overview: z.string().min(1, "Overview is required"),
  treatments: z.array(treatmentSchema).min(1, "At least one treatment is required"),
})

type FormValues = z.infer<typeof formSchema>

export default function HospitalDepartmentForm() {
  const [services, setServices] = useState<{ id: number; name: string }[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departmentName: '',
      description: '',
      serviceId: 0,
      baseImgUrl: '',
      iconImgUrl: '',
      overview: '',
      treatments: [{ treatmentName: '', treatmentDescription: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "treatments",
  })

 

  const onSubmit = async (data: FormValues) => {
    console.log(data)
    // try {
    //   const response = await fetch('/api/departments', { // Replace with your actual API endpoint
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })

    //   if (response.ok) {
    //     console.log('Department created successfully')
    //     // Handle success (e.g., show a success message, redirect, etc.)
    //   } else {
    //     console.error('Failed to create department')
    //     // Handle error (e.g., show an error message)
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error)
    //   // Handle error (e.g., show an error message)
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="departmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter department name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter department description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value.toString()}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id.toString()}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="baseImgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter base image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="iconImgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter icon image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="overview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Overview</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter department overview" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h3 className="text-lg font-semibold mb-2">Treatments</h3>
          {fields.map((field, index) => (
            <div key={field.id} className="space-y-4 mb-4">
              <FormField
                control={form.control}
                name={`treatments.${index}.treatmentName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treatment Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter treatment name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`treatments.${index}.treatmentDescription`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treatment Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter treatment description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>
                <Trash2 className="mr-2 h-4 w-4" /> Remove Treatment
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ treatmentName: '', treatmentDescription: '' })}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Treatment
          </Button>
        </div>

        <Button type="submit">Create Department</Button>
      </form>
    </Form>
  )
}