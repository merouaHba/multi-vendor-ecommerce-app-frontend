import { z } from "zod";

const profileSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .optional()
    .transform((val) => val || "")
    .superRefine((val, ctx) => {
      if (!val) return; 

      if (!/^(\d{1,4})\d{6,14}$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Mobile number not valid",
        });
      }
    }),

  address: z.string().optional(),
});


type ProfileFormType = z.infer<typeof profileSchema>;

export { profileSchema, type ProfileFormType };
