import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Login",
};

export default async function LoginPage() {
   return (
      <div>
         <LoginForm />
      </div>
   );
}
