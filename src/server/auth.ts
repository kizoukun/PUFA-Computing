"use server";
import "server-only";
import { db } from "@/lib/db";
import { UserRegisterSchema } from "@/lib/schema/auth";
import { z } from "zod";
const bcrypt = require("bcrypt");

export async function UserRegister(form: unknown) {
   try {
      const result = UserRegisterSchema.safeParse(form);
      if (!result.success) {
         let errorMessage = "";
         result.error.issues.forEach((issue) => {
            errorMessage += issue.message + ". ";
         });
         return { error: errorMessage };
      }

      const checkEmail = await db.users.findFirst({
         where: {
            email: result.data.email,
         },
      });

      if (checkEmail) {
         return { error: "Email already exists" };
      }

      const id = result.data.studentId.substring(0, 3);

      const checkMajor = await db.major.findFirst({
         where: {
            uniqueId: id,
         },
      });

      if (!checkMajor) {
         return {
            error: "Organization currently not supported, please try to contact us to add organization",
         };
      }

      const password = await bcrypt.hash(result.data.password, 10);
      const data = result.data;
      const putDb = await db.users.create({
         data: {
            email: data.email,
            password: password,
            firstName: data.firstName,
            lastName: data.lastName,
            studentId: data.studentId,
            majorId: checkMajor.id,
            yearOfBatch: data.year,
         },
      });
      if (!putDb) {
         return { error: "Failed to create user" };
      }
      return { error: false, message: "User created", id: putDb.id };
   } catch (err) {
      return { error: "Failed to create user" };
   }
}

const MajorSchema = z.object({
   id: z
      .string({
         required_error: "ID is required",
      })
      .length(3, {
         message: "ID must be 3 characters",
      }),
});

export async function getMajor(formData: unknown) {
   const result = MajorSchema.safeParse(formData);
   if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
         errorMessage += issue.message + ". ";
      });
      return { error: errorMessage };
   }

   const major = await db.major.findFirst({
      where: {
         uniqueId: result.data.id,
      },
   });

   if (!major) {
      return { error: "Major not found" };
   }

   return { error: false, major: major };
}
