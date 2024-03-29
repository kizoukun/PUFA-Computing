"use server";
import { db } from "@/lib/db";
import { AspirationFormSchema } from "@/lib/schema/aspiration";
import { revalidatePath } from "next/cache";
import "server-only";

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
