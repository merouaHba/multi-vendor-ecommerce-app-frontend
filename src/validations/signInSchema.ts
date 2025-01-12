import { z } from "zod";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional().default(false),
});

type signInType = z.infer<typeof signInSchema>;

export { signInSchema, type signInType };
