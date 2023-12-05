import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Sign In",
};

export default async function LoginPage() {
   return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
         <LoginForm />
      </div>
   );
}
