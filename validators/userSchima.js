import { z } from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      passwordRegex,
      "Password must contain at least one alphabet, one number, and one special character"
    ),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      passwordRegex,
      "Password must contain at least one alphabet, one number, and one special character"
    ),
  first_name: z
    .string()
    .min(3, "First name must contain at least 3 characters"),
  last_name: z.string().min(3, "Last name must contain at least 3 characters"),
  phone_number: z
    .string()
    .min(10)
    .max(13)
    .regex(/^[\d+]+$/, { message: "Phone number is invalid" }),
});
