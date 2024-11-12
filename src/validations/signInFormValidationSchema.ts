import { z } from "zod";

const signInFormValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "must be a valid email address" }),
  password: z
    .string()
    .min(1, { message: "password must be 8 characters at least" }),
});

type singInTypes = z.infer<typeof signInFormValidationSchema>;

export { type singInTypes, signInFormValidationSchema };
