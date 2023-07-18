import * as z from "zod";
import messages from "lib/messages";

export const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: messages.PROFILE_VALIDATION_USERNAME_MIN_EN,
        })
        .max(30, {
            message: messages.PROFILE_VALIDATION_USERNAME_MAX_EN,
        }),
    avatar: z
        .string()
        .url({ message: messages.PROFILE_VALIDATION_AVATAR_EN }).optional()
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>