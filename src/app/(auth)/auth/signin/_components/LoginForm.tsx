"use client";
import React, { useState } from "react";
import { Login } from "@/services/api/auth";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import Seperator from "@/components/Seperator";

interface LoginFormProps {
   onLoginSuccess: (access_token: string, userId: string) => void;
}

type ErrorResponse = {
   success: boolean;
   message: string;
   data: {};
};

export default function LoginForm() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   // Regular expression for basic email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const isEmailValid = (email: string) => {
      return emailRegex.test(email);
   };

   const handleLogin = async (e: React.FormEvent) => {
      try {
         e.preventDefault();
         if (!isEmailValid(username)) {
            setError("Please enter a valid email address");
            return;
         }

         const response = await Login(username, password);

         if (response.status === 200) {
            const data = await response.json();
            console.log(data);

            if (data.success) {
               successLogin(data);
            } else {
               setError(data.message);
            }
         } else {
            const data = await response.json();
            if (
               response.status === 404 ||
               data.message === "no rows in result set"
            ) {
               // User account not found
               showAccountNotFoundAlert();
            } else {
               setError(
                  `Failed to Login: ${data.message || response.statusText}`
               );
            }
         }
      } catch (error) {
         const err = error as AxiosError<ErrorResponse>;
         if (err.response) {
            setError(err.response.data.message);
         } else {
            setError(err.message);
         }
      }
   };

   const showAccountNotFoundAlert = () => {
      Swal.fire({
         icon: "error",
         title: "Account Not Found",
         text: "The provided email address and password combination does not match any existing account.",
      });
   };

   const successLogin = (access: any) => {
      Swal.fire({
         icon: "success",
         title: "Login Success",
         text: "You are now logged in",
         showConfirmButton: false,
         timer: 2000,
      }).then(() => {
         localStorage.setItem(
            "access_token",
            access.data.attributes.access_token
         );
         localStorage.setItem("userId", access.data.userId);
         window.location.href = "/dashboard/profile";
      });
   };

   return (
      <section>
         <div className="mx-auto max-w-6xl rounded-md bg-white bg-opacity-40 p-6 shadow-md">
            <div>
               <div className="flex items-center justify-between">
                  <div className="mr-10 md:mr-24 text-[#353535]">
                     <p className="font-normal text-base md:text-lg">Hello, Computizens!</p>
                     <p className="font-semibold text-lg md:text-2xl">Let’s Sign In Folks</p>
                  </div>
                  <div className="flex space-x-2">
                     <img
                        src="../logo/PUFA_Computing.png"
                        alt="PUFA Computing Logo"
                        className="h-12 w-12 md:h-16 md:w-16"
                     />
                     <img src="../PU.png" alt="PU Logo" className="h-12 w-12 md:h-16 md:w-16" />
                  </div>
               </div>
               <div className="my-4">
                  <Seperator className="border-[#D1D5DB]"/>
               </div>
            </div>
            <form onSubmit={(e) => e.preventDefault}>
               <div className="relative mt-8 flex items-center">
                  <span className="absolute"></span>
                  <input
                     type="text"
                     className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400  focus:outline-none focus:ring-blue-300"
                     placeholder="Email address"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>

               <div className="relative mt-4 flex items-center">
                  <span className="absolute"></span>
                  <input
                     type="password"
                     className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400  focus:outline-none focus:ring-blue-300"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>

               <div className="mt-6">
                  {error && (
                     <div className="error my-2 text-red-500">{error}</div>
                  )}
                  <button
                     onClick={handleLogin}
                     className="w-full transform rounded-lg bg-white px-6 py-3 text-sm font-medium capitalize tracking-wide text-[#6B7280] transition-colors duration-300 hover:bg-[#6B7280] hover:text-white border border-[#6B7280]"
                  >
                     Sign in
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}
