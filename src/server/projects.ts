"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import "server-only";
import { z } from "zod";

const CreateProjectSchema = z.object({
   title: z.string({ required_error: "Title is required" }).min(5, {
      message: "Title must be at least 5 characters",
   }),
   fullName: z.string({ required_error: "Full Name is required" }).min(1, {
      message: "Full Name is required",
   }),
   description: z
      .string({ required_error: "Description is required" })
      .min(10, { message: "Description must be at least 10 characters" }),
   major: z
      .string({ required_error: "Major is required" })
      .min(1, { message: "Major is required" }),
   image: z
      .string({ required_error: "Image is required" })
      .min(1, { message: "Image is required" }),
});

export async function CreateProject(form: unknown) {
   const result = CreateProjectSchema.safeParse(form);
   if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
         errorMessage += issue.message + ". ";
      });
      return { error: errorMessage };
   }
   const data = result.data;
   const putDb = await db.project.create({
      data: {
         title: data.title,
         description: data.description,
         major: data.major,
         fullName: data.fullName,
      },
   });
   if (!putDb) {
      return { error: "Faield to create project" };
   }
   const putImage = await db.projectImage.create({
      data: {
         imageUrl: data.image,
         projectId: putDb.id,
      },
   });
   revalidatePath("/projects");
   return { error: false, message: "Project created", id: putDb.id };
}
