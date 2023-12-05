"use client";
import React, { useState } from "react";
import { Login } from "@/services/api/auth";
import { AxiosError } from "axios";

export default function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      try {
         const result = await Login(email, password);
         // handl successful login
      } catch (error: any) {
         //handle error
         if (error?.response?.status === 400) {
            setError(error.response?.data?.error ?? "Failed to Login");
         } else {
            setError("Login failed");
         }
      }
   };

   return (
      <form onSubmit={(e) => e.preventDefault} className="w-full max-w-md">
         <img
            className="mx-auto my-8 h-32 w-auto rounded-lg sm:h-48"
            src="../PUComputing.png"
            alt=""
         />

         <h1 className="mt-3 text-center text-2xl font-semibold capitalize text-gray-100 sm:text-3xl">
            Sign In
         </h1>

         <div className="relative mt-8 flex items-center">
            <span className="absolute"></span>
            <input
               type="email"
               className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400  focus:outline-none focus:ring-blue-300"
               placeholder="Email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
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
