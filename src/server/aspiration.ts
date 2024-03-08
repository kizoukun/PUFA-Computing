"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import "server-only";
import { z } from "zod";

const AspirationFormSchema = z.object({
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

export async function CreateAspiration(form: unknown) {
   const result = AspirationFormSchema.safeParse(form);
   if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
         errorMessage += issue.message + ". ";
      });
      return { error: errorMessage };
   }
   const data = result.data;
   const putDb = await db.aspiration.create({
      data: {
         to: data.to,
         from: data.from,
         anonymous: data.anonymous,
         subject: data.subject,
         message: data.message,
      },
   });
   if (!putDb) {
      return { error: "Failed to create aspiration" };
   }
   revalidatePath("/aspiration");
   return { error: false, message: "Aspiration created", id: putDb.id };
}
