import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";
import { Metadata } from "next";
import PUComputing from "@/assets/PUComputing.png";

export const metadata: Metadata = {
   title: "Register",
};

export default async function RegisterPage() {
   return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6 py-10">
         <div className="mx-auto max-w-lg">
            <Image
               src={PUComputing}
               alt="PU Computing Logo"
               className="mx-auto h-64 w-64"
            />

            <h1 className="mt-3 text-center text-2xl font-semibold capitalize text-black sm:text-3xl">
               Sign Up
            </h1>
            <RegisterForm />
         </div>
      </div>
   );
}
