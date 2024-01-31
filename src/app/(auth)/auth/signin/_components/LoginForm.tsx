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
      e.preventDefault();
      setError("");

      if (!isEmailValid(username)) {
         await Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address",
         });
          return;
      }

      try {
         // const response = await Login(username, password);

         // if (response.data.success) {
         //    successLogin(response.data);
         // } else {
         //    setError(response.data.message || "test");
         // }

         //fake login until api finish
         localStorage.setItem("access_token","123")
         localStorage.setItem("userId","2")
         window.location.href = "/";

      } catch (error: any) {
         if (error instanceof AxiosError) {
            if (error.code === "ERR_NETWORK") {
               setError("Network Error");
               return;
            }
            const errorResponse = error?.response?.data as ErrorResponse;
            if (!errorResponse.success)
               setError(errorResponse.message ?? "Failed to Login");
         } else {
            setError("Login failed");
         }
      }
   };

   const successLogin = (data: any) => {
      const access_token = data?.data?.attributes?.access_token;
      const userId = data?.user_id;

      if (!access_token || !userId) {
         setError("Failed to Login");
         return;
      }

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("userId", userId);
      window.location.href = "/";
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
