import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Register",
};

export default async function RegisterPage() {
   return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6 py-10">
         <RegisterForm />
      </div>
   );
}
