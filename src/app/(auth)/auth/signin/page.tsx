import { getServerSession } from "next-auth";
import LoginForm from "./_components/LoginForm";
import { Metadata } from "next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
   title: "Sign In",
};

export default async function LoginPage() {
   const session = await getServerSession(authOptions);
   if (session) {
      return redirect("/dashboard");
   }
   return (
      <div
         className="bg-cover bg-center"
         style={{ backgroundImage: `url('/doodle.svg')` }}
      >
         <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
            <div className="mx-auto max-w-lg">
               <section className="mx-auto max-w-6xl rounded-md bg-white bg-opacity-40 p-6 shadow-md">
                  <div>
                     <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 text-[#353535] md:mb-0 md:mr-10">
                           <p className="text-base font-normal md:text-lg">
                              Hello, Computizens!
                           </p>
                           <p className="text-lg font-semibold md:text-2xl">
                              Let’s Sign In Folks
                           </p>
                        </div>
                        <div className="flex space-x-2">
                           <img
                              src="../logo/PUFA_Computing.png"
                              alt="PUFA Computing Logo"
                              className="h-12 w-12 md:h-16 md:w-16"
                           />
                           <img
                              src="../PU.png"
                              alt="PU Logo"
                              className="h-12 w-12 md:h-16 md:w-16"
                           />
                        </div>
                     </div>
                     <div className="my-4">
                        <div className="border-t border-[#D1D5DB]"></div>
                     </div>
                  </div>
                  <LoginForm />
               </section>
            </div>
         </div>
      </div>
   );
}
