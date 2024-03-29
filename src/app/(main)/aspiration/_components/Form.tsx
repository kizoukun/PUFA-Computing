"use client";

import Swal from "sweetalert2";
import Select from "react-select";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { CreateAspiration } from "@/server/aspiration";
import { Toast } from "@/lib/Toast";
import { AspirationFormSchema } from "@/lib/schema/aspiration";

type AspirationFormProps = {
   isLoggedIn: boolean;
};

export default function AspirationForm({ isLoggedIn }: AspirationFormProps) {
   const formHtml = useRef<HTMLFormElement>(null);
   const session = useSession();
   const [selectedOrganization, setSelectedOrganization] = useState<{
      value: string;
   } | null>(null);

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (!selectedOrganization) {
         return; // If no organization is selected, do not proceed
      }

      const formData = new FormData(event.target as HTMLFormElement);
      const organization = organizations.find(
         (org) => org.value === selectedOrganization.value
      );
      const data = {
         subject: formData.get("subject") as string,
         to: organization?.label,
         from: session.data?.user.firstName + " " + session.data?.user.lastName,
         anonymous: formData.get("anonymous") === "on",
         message: formData.get("message") as string,
      };

      const validationResult = AspirationFormSchema.safeParse(data);
      if (!validationResult.success) {
         let errorMessage = "";
         validationResult.error.issues.forEach((issue) => {
            errorMessage += issue.message + ".\n";
         });
         await Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMessage,
         });
         return;
      }

      try {
         const response = await CreateAspiration(validationResult.data);
         if (response.error) {
            await Toast.fire({
               icon: "error",
               title: response.error,
            });
            return;
         }

         await Swal.fire({
            title: "Aspiration Sent!",
            text: "Your aspiration has been sent to the organization.",
            icon: "success",
            confirmButtonText: "OK",
         });
         formHtml.current?.reset();
      } catch (error) {
         console.error("Error creating aspiration", error);
         await Swal.fire({
            title: "Error",
            text: "An error occurred while sending your aspiration.",
            icon: "error",
            confirmButtonText: "OK",
         });
      }
   }

   const organizations = [
      { value: "1", label: "PUFA Computing" },
      { value: "2", label: "PUMA Informatics" },
      { value: "3", label: "PUMA Information System" },
      { value: "4", label: "PUMA VCD" },
      { value: "5", label: "PUMA Interior Design" },
   ];

   if (!isLoggedIn) {
      return (
         <div className="flex flex-col rounded-lg border bg-white px-4 py-4 opacity-90 shadow-lg md:px-8 md:py-8">
            <h1 className=" text-[1.4rem] text-[#656565] md:text-[1.8rem]">
               Share Your Aspirations for Better Computing
            </h1>
            <hr className="my-8 border" />
            <div>
               <h1 className="text-[1.3rem] ">Hello, Guest!</h1>
               <h1 className="text-[1.3rem] font-bold">
                  Please log in to share your aspiration
               </h1>
            </div>
            <hr className="my-8 border" />

            <button
               className="flex self-center rounded-lg border-2 border-[#6B7280] px-6 py-2 shadow-sm transition-all duration-300 hover:border-white hover:bg-[#6B7280] hover:text-white md:px-16 md:py-3"
               onClick={() => {
                  window.location.href = "auth/signin";
               }}
            >
               Sign In
            </button>
         </div>
      );
   }

   return (
      <div className="flex flex-col rounded-lg border bg-white px-4 py-4 opacity-90 shadow-lg md:px-8 md:py-8">
         <h1 className=" text-[1.4rem] text-[#656565] md:text-[1.8rem]">
            Share Your Aspirations for Better Computing
         </h1>
         <hr className="my-8 border" />
         <div>
            <h1 className="text-[1.3rem] ">
               Hello, {session.data?.user.firstName ?? ""}{" "}
               {session.data?.user.lastName ?? ""}
            </h1>
            <h1 className="text-[1.3rem] font-bold">Let's fill in this box!</h1>
         </div>
         <hr className="my-8 border" />

         <form onSubmit={handleSubmit} ref={formHtml}>
            <div className="mb-6 flex flex-col gap-2">
               <h1 className="text-[1.1rem] font-bold">To:</h1>
               <p className="text-[0.9rem]">
                  Select the organization you want to share your aspiration
                  with:
               </p>
               <Select
                  value={selectedOrganization}
                  onChange={(selectedOption) =>
                     setSelectedOrganization(selectedOption as any)
                  }
                  options={organizations}
               />
            </div>

            <div className="mb-6 flex flex-col gap-2">
               <h1 className="text-[1.1rem] font-bold">From:</h1>
               <div className="flex gap-2">
                  <p className="text-[0.9rem]">Share it anonymously</p>
                  <label className="inline-flex cursor-pointer items-center">
                     <input
                        type="checkbox"
                        name="anonymous"
                        className="peer sr-only"
                     />
                     <div className="peer relative h-6 w-11 scale-90 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"></div>
                     <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
               </div>

               {/*User Name*/}
               <input
                  type="text"
                  name="from"
                  className="w-[100%] rounded-lg border-2 p-2"
                  value={
                     (session.data?.user.firstName ?? "") +
                     " " +
                     (session.data?.user.lastName ?? "")
                  }
                  disabled
               />
            </div>

            <div className="mb-6 flex flex-col gap-2">
               <h1 className="text-[1.1rem] font-bold">Subject:</h1>
               <p className="text-[0.9rem]">Your email etc.</p>
               <input
                  type="text"
                  name="subject"
                  className="w-[100%] rounded-lg border-2 p-2"
               />
            </div>

            <div className="mb-6 flex flex-col gap-2">
               <h1 className="text-[1.1rem] font-bold">Message:</h1>
               <p className="text-[0.9rem]">
                  Anything else you want to let us know:
               </p>
               <textarea
                  name="message"
                  id=""
                  cols={30}
                  rows={10}
                  className="resize-none rounded-lg border-2 p-2 "
               ></textarea>
            </div>

            <button
               type="submit"
               className="flex self-center rounded-lg border-2 border-[#6B7280] px-6 py-2 shadow-sm transition-all duration-300 hover:border-white hover:bg-[#6B7280] hover:text-white md:px-16 md:py-3"
            >
               Submit
            </button>
         </form>
      </div>
   );
}
