import { z } from "zod";

const storeDetailsSchema = z.object({
  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(200, { message: "Address must be less than 200 characters" }),
  
  city: z
    .string()
    .min(1, { message: "City is required" })
    .max(100, { message: "City must be less than 100 characters" })
    .regex(/^[a-zA-Z\s-]+$/, {
      message: "City should only contain letters, spaces, and hyphens",
    }),
  
  state: z
    .string()
    .min(1, { message: "State is required" })
    .max(100, { message: "State must be less than 100 characters" })
    .regex(/^[a-zA-Z\s-]+$/, {
      message: "State should only contain letters, spaces, and hyphens",
    }),
  
  postalCode: z
    .string()
    .min(1, { message: "Postal code is required" })
    .regex(/^\d+$/, { message: "Postal code must contain only numbers" })
    .min(5, { message: "Postal code must be at least 5 digits" })
    .max(10, { message: "Postal code must be less than 10 digits" }),
  
  country: z
    .string()
    .min(1, { message: "Country is required" })
    .max(100, { message: "Country must be less than 100 characters" })
    .regex(/^[a-zA-Z\s-]+$/, {
      message: "Country should only contain letters, spaces, and hyphens",
    }),
});

const signUpSchema = z
  .object({
    firstname: z
      .string()
      .min(1, { message: "First name is required" })
      .regex(/^[a-zA-Z\s]*$/, {
        message: "First name should only contain letters",
      })
      .min(2, { message: "First name must be at least 2 characters" })
      .max(50, { message: "First name must be less than 50 characters" }),

    lastname: z
      .string()
      .min(1, { message: "Last name is required" })
      .regex(/^[a-zA-Z\s]*$/, {
        message: "Last name should only contain letters",
      })
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(50, { message: "Last name must be less than 50 characters" }),

    storeName: z
      .string()
      .min(1, { message: "Store name is required" })
      .min(3, { message: "Store name must be at least 3 characters" })
      .max(100, { message: "Store name must be less than 100 characters" })
      .regex(/^[a-zA-Z0-9\s\-&'.]+$/, {
        message:
          "Store name can only contain letters, numbers, spaces, and basic punctuation",
      })
      .optional(),

    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .email({ message: "Please enter a valid email address" })
      .max(100, { message: "Email must be less than 100 characters" }),

    mobile: z
      .string()
      .min(1, { message: "mobile number is required" })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Please enter a valid mobile number",
      })
      .optional(),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must be less than 100 characters" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),

    isSeller: z.boolean().optional(),
    storeDetails: storeDetailsSchema.optional(),
    terms: z
      .boolean()
      .refine((value) => value, { message: "You must agree to the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => !data.isSeller || (data.storeName && data.storeName.length > 0),
    {
      message: "Store name is required for sellers",
      path: ["storeName"],
    }
  )
  .refine((data) => !data.isSeller || (data.mobile && data.mobile.length > 0), {
    message: "mobile number is required for sellers",
    path: ["mobile"],
  })
  .refine(
    (data) =>
      !data.isSeller ||
      (data.storeDetails && Object.keys(data.storeDetails).length > 0),
    {
      message: "Store Details are required for sellers",
      path: ["storeDetails"],
    }
  );

type storeDetails = z.infer<typeof storeDetailsSchema>;
type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, storeDetailsSchema, type signUpType, type storeDetails };