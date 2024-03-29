"use server";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import {
   AspirationFormSchema,
   AspirationLikeSchema,
} from "@/lib/schema/aspiration";
import { getServerSession } from "next-auth";
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
   const checkMajor = await db.major.findFirst({
      where: {
         id: data.organization,
      },
   });

   if (!checkMajor) {
      return { error: "Organization not found" };
   }

   const putDb = await db.aspiration.create({
      data: {
         majorId: checkMajor.id,
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

export async function AspirationLike(form: unknown) {
   const result = AspirationLikeSchema.safeParse(form);
   if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
         errorMessage += issue.message + ". ";
      });
      return { error: errorMessage };
   }

   const data = result.data;

   const checkAspiration = await db.aspiration.findFirst({
      where: {
         id: data.id,
      },
      include: {
         AspirationLike: true,
      },
   });

   if (!checkAspiration) {
      return { error: "Aspiration not found" };
   }

   const session = await getServerSession(authOptions);
   if (!session) {
      return { error: "You need to be logged in for liking aspiration" };
   }
   const user = session?.user;
   if (!user) {
      return { error: "You need to be logged in for liking aspiration" };
   }

   const checkLike = checkAspiration.AspirationLike.find(
      (like) => like.userId === user.id
   );

   if (checkLike) {
      await db.aspirationLike.delete({
         where: {
            id: checkLike.id,
         },
      });
      return {
         error: false,
         message: "Successfully unlike aspiration",
         isLiked: false,
      };
   } else {
      await db.aspirationLike.create({
         data: {
            userId: user.id,
            aspirationId: checkAspiration.id,
         },
      });
      return {
         error: false,
         message: "Successfully like aspiration",
         isLiked: true,
      };
   }
}
