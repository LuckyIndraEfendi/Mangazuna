import { z } from "zod";

export const FormDataSignUpSchema = z.object({
  username: z.string().min(5).max(20),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must 5 charather or least" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" })
    .max(16),
});

export const FormDataSignInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must 5 charather or least" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" })
    .max(16),
});
