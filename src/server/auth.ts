"use server";
import "server-only";
import { db } from "@/lib/db";
import { UserRegisterSchema } from "@/lib/schema/auth";
const bcrypt = require("bcrypt");

export async function UserRegister(form: unknown) {
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

   const password = await bcrypt.hash(result.data.password, 10);
   const data = result.data;
   const putDb = await db.users.create({
      data: {
         email: data.email,
         password: password,
         firstName: data.firstName,
         lastName: data.lastName,
         studentId: data.studentId,
         major: data.major,
         yearOfBatch: data.year,
      },
   });
   if (!putDb) {
      return { error: "Failed to create user" };
   }
   return { error: false, message: "User created", id: putDb.id };
}
