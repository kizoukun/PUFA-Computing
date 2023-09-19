"use client";
import { useState } from "react";
import { Login } from "@/services/api/auth";
import { AxiosError } from "axios";

export default function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleLogin = async () => {
      try {
         const result = await Login(email, password);
         // handl successful login
      } catch (error: any) {
         //handle error
         if (error?.response?.status === 400) {
            setError("Invalid credentials");
         } else {
            setError("Login failed");
         }
      }
   };

   return (
      <form onSubmit={(e) => e.preventDefault} className="w-full max-w-md">
         <img
            className="w-auto h-32 sm:h-48 rounded-lg mx-auto my-8"
            src="../PUComputing.png"
            alt=""
         />

         <h1 className="mt-3 text-2xl font-semibold text-gray-100 capitalize sm:text-3xl text-center">
            Sign In
         </h1>

         <div className="relative flex items-center mt-8">
            <span className="absolute"></span>
            <input
               type="email"
               className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none"
               placeholder="Email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>

         <div className="relative flex items-center mt-4">
            <span className="absolute"></span>
            <input
               type="password"
               className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400  focus:ring-blue-300 focus:outline-none"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </div>

         <div className="mt-6">
            <button
               onClick={handleLogin}
               className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
               Sign in
            </button>
            {error && <div className="error">{error}</div>}
         </div>
      </form>
   );
}
