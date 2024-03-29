import { z } from "zod";

export const AspirationFormSchema = z.object({
   organization: z.number({ required_error: "Organization is required" }),
   from: z.string({ required_error: "From is required" }).min(3, {
      message: "From must be at least 3 characters",
   }),
   anonymous: z.boolean(),
   subject: z.string({ required_error: "Subject is required" }).min(5, {
      message: "Subject must be at least 5 characters",
   }),
   message: z.string({ required_error: "Message is required" }).min(10, {
      message: "Message must be at least 10 characters",
   }),
});

export const AspirationLikeSchema = z.object({
   id: z.string({ required_error: "ID is required" }),
});
