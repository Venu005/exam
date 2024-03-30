import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterFormSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  role: z.string().nonempty({
    message: "Please select a coding language.",
  }),
  password: z.string().min(6, {
    message: "Password sgould be atleast 6 characters long",
  }),
  name: z.string().min(2, {
    message: "Name is required",
  }),
});
