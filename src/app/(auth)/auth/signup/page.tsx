import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";
import { Metadata } from "next";
import PUComputing from "@/assets/PUComputing.png";

export const metadata: Metadata = {
   title: "Register",
};

export default async function RegisterPage() {
   return (
      <div
         className="bg-cover bg-center"
         style={{ backgroundImage: `url('/doodle.svg')` }}
      >
         <div className="container mx-auto flex min-h-screen items-center justify-center px-6 py-10">
            <div className="mx-auto max-w-lg" >
               <RegisterForm />
            </div>
         </div>
      </div>
   );
}
