import * as z from "zod"

export const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    avatar: z
        .string()
        .url({ message: "Please enter a valid URL." }).optional()
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>