import { z } from "zod";

export const AspirationFormSchema = z.object({
   to: z.string({ required_error: "To is required" }).min(3, {
      message: "To must be at least 3 characters",
   }),
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
