"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserRegisterSchema } from "@/lib/schema/auth";
import { Toast } from "@/lib/Toast";
import { UserRegister } from "@/server/auth";
import { useRouter } from "next/navigation";

// RegisterForm component
export default function RegisterForm() {
   // State variables
   const [SelectedRole, setSelectedRole] = useState("Student");
   const [loading, setLoading] = useState(false);

   // router
   const router = useRouter();

   // Event handler for role change
   const HandleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRole(e.target.value);
   };

   // Event handler for registration
   const HandleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const result = UserRegisterSchema.safeParse(
         Object.fromEntries(formData.entries())
      );
      if (!result.success) {
         let errorMessage = "";
         result.error.issues.forEach((issue) => {
            errorMessage += issue.message + ". ";
         });
         await Toast.fire({
            icon: "error",
            title: errorMessage,
         });
         return;
      }

      try {
         setLoading(true);
         const response = await UserRegister(result.data);
         setLoading(false);
         if (response.error) {
            await Toast.fire({
               icon: "error",
               title: response.error,
            });
            return;
         }
         await Toast.fire({
            icon: "success",
            title: "User created",
         });
         router.push("/auth/signin");
      } catch (err) {
         await Toast.fire({
            icon: "error",
            title: "Unexpected error occured. Please try again later.",
         });
      }
   };

   return (
      <form onSubmit={HandleRegister} className="w-full max-w-md">
         {/* Name */}
         <div className="mb-4 md:flex md:space-x-2">
            <div className="md:w-1/2">
               <input
                  type="text"
                  className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                  placeholder="Ilham"
                  name="firstName"
                  required
               />
            </div>
            <div className="md:w-1/2">
               <input
                  type="text"
                  className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                  placeholder="Pratama"
                  name="lastName"
                  required
               />
            </div>
         </div>

         {/* Email */}
         <div className="mb-4">
            <input
               type="text"
               className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
               placeholder="ilhampratama@example.com"
               name="email"
               required
            />
         </div>

         {/* Password */}
         <div className="mb-4">
            <input
               type="password"
               className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
               placeholder="password"
               name="password"
               required
            />
         </div>

         <div>
            {/* Choose */}
            <div className="mt-2">
               <div className="relative mt-4 flex items-center justify-center gap-2">
                  <div className="flex-grow">
                     <input
                        type="radio"
                        name="RoleOption"
                        value="Student"
                        id="Student"
                        className="peer hidden"
                        checked={SelectedRole === "Student"}
                        onChange={HandleRoleChange}
                     />
                     <label
                        htmlFor="Student"
                        className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-5 py-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                     >
                        <p className="text-sm font-medium">Computizen</p>
                     </label>
                  </div>
                  <div className="flex-grow">
                     <input
                        type="radio"
                        name="RoleOption"
                        value="Institution"
                        id="Institution"
                        className="peer hidden cursor-not-allowed disabled:opacity-50"
                        checked={SelectedRole === "Institution"}
                        onChange={HandleRoleChange}
                        disabled
                     />
                     <label
                        htmlFor="Institution"
                        className="flex cursor-not-allowed items-center justify-center rounded-md border border-gray-100 bg-white px-5  py-3 text-gray-500 hover:border-gray-200 disabled:opacity-50 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                     >
                        <p className="text-sm font-medium">Institution</p>
                     </label>
                  </div>
               </div>
            </div>

            {/* Student ID */}
            {SelectedRole === "Student" && (
               <div className="mt-2">
                  <input
                     type="text"
                     inputMode="numeric"
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="Student ID"
                     name="studentId"
                     required
                  />
               </div>
            )}

            {/* Batch */}
            {SelectedRole === "Student" && (
               <div className="mt-2">
                  <input
                     type="number"
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="year"
                     name="year"
                     required
                  />
               </div>
            )}
         </div>

         {/* Institution */}
         <div>
            {SelectedRole != "Student" && (
               <div className="mt-2">
                  <input
                     type="text"
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="Universitas Perdana Mentri"
                     required
                     name="institution"
                  />
               </div>
            )}
         </div>

         <div className="mt-6">
            <button
               type="submit"
               disabled={loading}
               className="w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
               {loading ? "Registering..." : "Register"}
            </button>
         </div>
         <h1 className="pt-1 text-center font-[400] text-[#475467] text-[0.875] md:pt-3">
            Already have an account?
            <span className="text-[#02ABF3] hover:underline">
               <Link href={"/auth/signin"}> Sign In</Link>{" "}
            </span>
         </h1>
      </form>
   );
}
