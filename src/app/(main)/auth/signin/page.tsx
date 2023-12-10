import LoginForm from "./_components/LoginForm";
import { Metadata } from "next";
import PUComputing from "@/assets/PUComputing.png";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Sign In",
};

export default async function LoginPage() {
   return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
         <div className="mx-auto max-w-lg">
            <Image
               src={PUComputing}
               alt="PU Computing Logo"
               className="mx-auto h-64 w-64"
            />

            <h1 className="mt-3 text-center text-2xl font-semibold capitalize text-black sm:text-3xl">
               Sign In
            </h1>
            <LoginForm />
         </div>
      </div>
   );
}
