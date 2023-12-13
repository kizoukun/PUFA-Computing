"use client";
import React, { useState } from "react";
import { Register } from "@/services/api/auth";
import Swal from "sweetalert2";
import { AxiosError, AxiosResponse } from "axios";
import User from "@/models/user";

// Type for error response
type ErrorResponse = {
  success: boolean;
  message: string;
  data: {};
};

// RegisterForm component
export default function RegisterForm() {
  // State variables
  const [selectedRole, setSelectedRole] = useState("Student");
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
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };

  // Event handler for registration
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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
        student_id: selectedRole === "Student" ? (formData.get("studentId") as string) : undefined,
        year: selectedRole === "Student" ? (formData.get("batch") as string) : undefined,
        institution: selectedRole === "Institution" ? (formData.get("institution") as string) : undefined,
      };

      // Send registration request
      const res: AxiosResponse = await Register(user);

      // Handle the response or perform any necessary actions here
      console.log(res); // You can log the response or update your UI accordingly
    } catch (error) {
      // Handle errors here
      if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
          setError("Network Error");
          return;
        }
        const errorResponse = error?.response?.data as ErrorResponse;
        if (!errorResponse.success)
          setError(errorResponse.message ?? "Failed to Register");
      } else {
        setError("Register failed");
      }
    }
  };

   return (
      <div>
         <form onSubmit={handleRegister} className="w-full max-w-md">
            {/* Name */}
            <div className="relative mt-8 flex items-center gap-2">
               <div>
                  <label
                     htmlFor="firstName"
                     className="block text-left capitalize text-white "
                  >
                     {" "}
                     first name
                  </label>
                  <input
                     type="text"
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="Ilham"
                     name="firstName"
                     required
                  />
               </div>
               <div>
                  <label
                     htmlFor="lastName"
                     className="capitalilze block text-left text-white"
                  >
                     last name
                  </label>
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
            <div className="mt-2">
               <label htmlFor="email" className="block text-left text-white ">
                  Email
               </label>
               <input
                  type="text"
                  className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                  placeholder="ilhampratama@example.com"
                  name="email"
                  required
               />
            </div>

            {/* Password */}
            <div className="mt-2">
               <label
                  htmlFor="password"
                  className="block text-left text-white "
               >
                  Password
               </label>
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
                  <label
                     htmlFor="password"
                     className="block text-left capitalize text-white"
                  >
                     Choose your role
                  </label>
                  <div className="relative mt-4 flex items-center justify-center gap-2">
                     <div className="flex-grow">
                        <input
                           type="radio"
                           name="RoleOption"
                           value="Student"
                           id="Student"
                           className="peer hidden"
                           checked={selectedRole === "Student"}
                           onChange={handleRoleChange}
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
                           checked={selectedRole === "Institution"}
                           onChange={handleRoleChange}
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
               {selectedRole === "Student" && (
                  <div className="mt-2">
                     <label
                        htmlFor="studentId"
                        className="block text-left text-white"
                     >
                        Student ID
                     </label>
                     <input
                        type="text"
                        inputMode="numeric"
                        className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                        placeholder="0110333333"
                        name="studentId"
                        required
                     />
                  </div>
               )}

               {/* Batch */}
               {selectedRole === "Student" && (
                  <div className="mt-2">
                     <label
                        htmlFor="Batch"
                        className="block text-left text-white"
                     >
                        Batch
                     </label>
                     <input
                        type="number"
                        className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                        placeholder="2024"
                        name="batch"
                        required
                     />
                  </div>
               )}
            </div>

            {/* Institution */}
            <div>
               {selectedRole != "Student" && (
                  <div className="mt-2">
                     <label
                        htmlFor="institution"
                        className="block text-left text-white"
                     >
                        Name Of Institution
                     </label>
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
      </div>
   );
}
