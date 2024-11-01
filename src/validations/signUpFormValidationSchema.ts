import { z } from "zod";

const signUpFormValidationSchema = z
  .object({
    firstName: z.string().min(1, { message: "first name is required" }),
    lastName: z.string().min(1, { message: "last name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "must be a valid email address" }),
    password: z
      .string()
      .min(8, { message: "password must be 8 characters at least" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Passowrds don't match",
    path: ["confirmPassword"],
  });

type singUpTypes = z.infer<typeof signUpFormValidationSchema>;

export { type singUpTypes, signUpFormValidationSchema };
