"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "lib/utils"
import { Button } from "components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form"
import { Input } from "components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select"
import { Textarea } from "components/ui/textarea"
// import { toast } from "components/ui/use-toast"
import { ProfileFormValues, profileFormSchema } from "lib/schemas/profile.schema";


const defaultValues: Partial<ProfileFormValues> = {

}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
          
              <FormControl>
                <div className="mx-auto w-64 text-center ">
                  <div className="relative w-64">
                    <img className="w-64 h-64 rounded-full " src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500 top-0">
                      <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                    </div>
                  </div>
                </div>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}