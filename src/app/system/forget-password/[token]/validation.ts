import { z } from "zod";

export const passwordValid = z.object({
    newpassword: z.string().min(8, 'your password use to min 8 character')
    .regex(/[\W_]/, 'use must be one special character').regex(/[0-9]/, "use must be one number")
    .regex(/^\S*$/, "Don't Not use any spaces")
})