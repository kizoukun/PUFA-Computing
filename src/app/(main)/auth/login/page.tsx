import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Login",
};

export default async function LoginPage() {
   return (
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
         <LoginForm />
      </div>
   );
}
