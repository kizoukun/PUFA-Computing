"use client";
import { FormEventHandler, useState } from "react";
import { Register } from "@/services/api/auth";
import { AxiosError, AxiosResponse } from "axios";
import User from "@/models/user";

export default function RegisterForm() {
   // Role
   const [selectedRole, setSelectedRole] = useState("Student");

   const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRole(e.target.value);
   };

   const [first_name, setFirstName] = useState("");
   const [last_name, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [nim, setNim] = useState("");
   const [year, setYear] = useState("");
   const [error, setError] = useState("");

   // Handle Register
   const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      try {
         const user: User = {
            first_name,
            last_name,
            email,
            password,
            nim,
            year,
         };

         const res: AxiosResponse = await Register(user);

         // Handle the response or perform any necessary actions here
         console.log(res); // You can log the response or update your UI accordingly
      } catch (error) {
         // Handle errors here
         if (error instanceof AxiosError) {
            if (error.response?.status === 400) {
               // setError("Invalid credentials");
               setError(error.response?.data?.error ?? "Failed to Login");
            } else {
               setError("Register failed");
            }
         } else {
            setError("An error occurred");
         }
      }
   };

   return (
      <div>
         <form onSubmit={handleRegister} className="w-full max-w-md">
            {/* <img
          className="w-auto h-4 sm:h-8 mx-auto my-8"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        /> */}
            <img
               className="mx-auto mt-8 h-32 w-auto rounded-lg sm:h-48"
               src="../PUComputing.png"
               alt=""
            />

            <h1 className="mt-3 text-center text-2xl font-semibold capitalize text-black sm:text-3xl">
               sign Up
            </h1>

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
                     value={first_name}
                     onChange={(e) => setFirstName(e.target.value)}
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="Ilham"
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
                     value={last_name}
                     onChange={(e) => setLastName(e.target.value)}
                     className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                     placeholder="Pratama"
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                  placeholder="ilhampratama@example.com"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full rounded-lg border bg-white px-5 py-3 text-gray-700"
                  placeholder="password"
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
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        pattern="[0-9]*"
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
                        required
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
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
