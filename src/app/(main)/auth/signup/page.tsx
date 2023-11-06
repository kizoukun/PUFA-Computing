import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Register",
};

export default async function RegisterPage() {
   return (
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto py-10">
         <RegisterForm />
      </div>
   );
}
