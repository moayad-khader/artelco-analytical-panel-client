"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { z } from "zod"
import { Button } from "components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form"
import { Input } from "components/ui/input"
import { Icons } from "components/icons"
import { PasswordInput } from "components/passwordInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authSchema } from "lib/schemas/auth.schema";

type Inputs = z.infer<typeof authSchema>

export function SignInForm() {
  const router = useRouter()

  const [isPending, startTransition] = React.useTransition()


  function onSubmit(s) {
  
    startTransition(async () => {
       
    })
  }

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  return (
    <Form {...form} >
      <form
        className="grid gap-4 "
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="bg-primary text-white ">
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  )
}