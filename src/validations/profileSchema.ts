import { z } from "zod";

// Enhanced validation schema with firstname/lastname instead of name
const profileSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .optional()
    .nullable()
    .refine((val) => {
      if (!val) return true;
      return /^\+?[1-9]\d{1,14}$/.test(val);
    }, "Invalid mobile number"),
  address: z.string().optional(),
});


type ProfileFormType = z.infer<typeof profileSchema>;

export { profileSchema, type ProfileFormType };
