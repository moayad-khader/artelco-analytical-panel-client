"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import { 
    Avatar , 
    AvatarImage, 
    AvatarFallback 
} from "components/ui/avatar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "components/ui/command";
import { ProfileFormValues, profileFormSchema } from "lib/schemas/profile.schema";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "components/ui/popover";
import { Icons } from "components/icons";


const defaultValues: Partial<ProfileFormValues> = {

}

export function OrgnaizationForm() {
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
      <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">sara_mh</p>
            </div>
          </div>
          <Popover >
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Viewer{" "}
                <Icons.chevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 dark:bg-dark" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                      <p>Viewer</p>
                      <p className="text-sm text-muted-foreground">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                      <p>Owner</p>
                      <p className="text-sm text-muted-foreground">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
   
       
        <Button type="submit">Add Member</Button>
      </form>
    </Form>
  )
}