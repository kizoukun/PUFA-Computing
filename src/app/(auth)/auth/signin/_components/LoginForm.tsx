"use client";
import React, { useState } from "react";
import { Login } from "@/services/api/auth";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

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

            if(data.success) {
               successLogin(data);
            } else {
               setError(data.message);
            }
         } else {
            setError(`Failed to Login: ${response.statusText}`);
         }
      } catch (error) {
         const err = error as AxiosError<ErrorResponse>;
         if (err.response) {
            setError(err.response.data.message);
         } else {
            setError(err.message);
         }
      }
   }

   const successLogin = (data: any) => {
      Swal.fire({
         icon: "success",
         title: "Login Success",
         text: "You are now logged in",
         showConfirmButton: false,
         timer: 2000,
      }).then(() => {
         localStorage.setItem("access_token", data.data.attributes.access_token);
         localStorage.setItem("userId", data.data.userId);
         window.location.href = "/dashboard";
      });
   }

   return (
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
            {error && <div className="error my-2 text-red-500">{error}</div>}
            <button
               onClick={handleLogin}
               className="w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
               Sign in
            </button>
         </div>
      </form>
   );
}
