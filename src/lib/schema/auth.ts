import { z } from "zod";

export const UserLoginSchema = z.object({
   email: z.string({ required_error: "Email is required" }).email({
      message: "Invalid email",
   }),
   password: z.string({ required_error: "Password is required" }).min(6, {
      message: "Password must be at least 8 characters",
   }),
});

export const UserRegisterSchema = z.object({
   email: z.string({ required_error: "Email is required" }).email({
      message: "Invalid email",
   }),

   password: z.string({ required_error: "Password is required" }).min(6, {
      message: "Password must be at least 8 characters",
   }),
   firstName: z.string({ required_error: "First name is required" }).min(3, {
      message: "First name must be at least 3 characters",
   }),
   lastName: z.string({ required_error: "Last name is required" }).min(3, {
      message: "Last name must be at least 3 characters",
   }),
   studentId: z
      .string({ required_error: "Student ID is required" })
      .regex(/^[0-9]{3}[0-9]{9}$/, {
         message:
            "Student ID must be 12 digits long and start with 3 digits of major, 4 digits of batch, 5 digits of id",
      }),
   year: z.string({ required_error: "Year is required" }).min(4, {
      message: "Year must be 4 characters",
   }),
});
