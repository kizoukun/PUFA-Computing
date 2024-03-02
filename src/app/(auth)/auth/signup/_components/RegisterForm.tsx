"use client";
import React, { useState } from "react";
import { Register } from "@/services/api/auth";
import Swal from "sweetalert2";
import { AxiosError, AxiosResponse } from "axios";
import User from "@/models/user";
import Seperator from "@/components/Seperator";

// Type for error response
type ErrorResponse = {
   success: boolean;
   message: string;
   data: {};
};

// RegisterForm component
export default function RegisterForm() {
   // State variables
   const [SelectedRole, setSelectedRole] = useState("Student");
   const [error, setError] = useState("");

   // validation/regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   const studentIdRegex = /^\d{11,}$/;

   // Function to check
   const isEmailValid = (email: string) => {
      return emailRegex.test(email);
   };
   const isPasswordValid = (password: string) => {
      return passwordRegex.test(password);
   };
   const isStudentIdValid = (studentId: string) => {
      return studentIdRegex.test(studentId);
   };

   // Event handler for role change
   const HandleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRole(e.target.value);
   };

   // Event handler for registration
   const HandleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);

      setError("");
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const studentId = formData.get("studentId") as string;

      // Check if the entered email is valid
      if (!isEmailValid(email)) {
         Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address",
         });
         return;
      }
      // Check if the password valid
      if (!isPasswordValid(password)) {
         Swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "Password must be at least 8 characters long and contain at least 1 numeric digit.",
         });
         return;
      }
      if (!isStudentIdValid(studentId)) {
         Swal.fire({
            icon: "error",
            title: "Invalid Student ID",
            text: "Student ID must be at least 12 characters long and contain numeric digit.",
         });
         return;
      }

      try {
         // Construct user object based on form data
         const user: User = {
            first_name: formData.get("firstName") as string,
            last_name: formData.get("lastName") as string,
            email,
            password: formData.get("password") as string,
            student_id:
               SelectedRole === "computing"
                  ? (formData.get("studentId") as string)
                  : undefined,
            year:
               SelectedRole === "computing"
                  ? (formData.get("batch") as string)
                  : undefined,
            institution:
               SelectedRole === "Institution"
                  ? (formData.get("institution") as string)
                  : undefined,
         };

         // Send registration request
         const res: Response = await Register(user.email, user.password);

         // Handle the response or perform any necessary actions here
         console.log(res); // You can log the response or update your UI accordingly
      } catch (error) {
         // Handle errors here
         if (error instanceof AxiosError) {
            if (error.code === "ERR_NETWORK") {
               setError("Network Error");
               return;
            }
            const ErrorResponse = error?.response?.data as ErrorResponse;
            if (!ErrorResponse.success)
               setError(ErrorResponse.message ?? "Failed to Register");
         } else {
            setError("Register failed");
         }
      }
   };

   return (
      <section className="mx-auto max-w-6xl rounded-md bg-white bg-opacity-40 p-6 shadow-md">
         <div>
            <div className="flex flex-col items-center justify-between md:flex-row">
               <div className="mb-4 text-[#353535] md:mb-0 md:mr-10">
                  <p className="text-center text-base font-normal md:text-left md:text-lg">
                     Hello, Computizens!
                  </p>
                  <p className="text-lg font-semibold md:text-lg">
                     Let’s Create an Account
                  </p>
               </div>
               <div className="flex space-x-2">
                  <img
                     src="../logo/PUFA_Computing.png"
                     alt="PUFA Computing Logo"
                     className="h-12 w-12 md:h-16 md:w-16"
                  />
                  <img
                     src="../PU.png"
                     alt="PU Logo"
                     className="h-12 w-12 md:h-16 md:w-16"
                  />
               </div>
            </div>
            <div className="my-4">
               <div className="border-t border-[#D1D5DB]"></div>
            </div>
         </div>
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
                           <p className="text-sm font-medium">Computizens</p>
                        </label>
                     </div>
                     <div className="flex-grow">
                        <input
                           type="radio"
                           name="RoleOption"
                           value="Institution"
                           id="Institution"
                           className="peer hidden"
                           checked={SelectedRole === "Institution"}
                           onChange={HandleRoleChange}
                        />
                        <label
                           htmlFor="Institution"
                           className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-5 py-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                        placeholder="Batch"
                        name="batch"
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
                        // value={institution}
                        // onChange={(e) => setInstitution(e.target.value)}
                     />
                  </div>
               )}
            </div>

            <div className="mt-6">
               {error && <p className="my-2 text-red-500">{error}</p>}
               <button
                  type="submit"
                  className="w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
               >
                  Register
               </button>
            </div>
         </form>
      </section>
   );
}
