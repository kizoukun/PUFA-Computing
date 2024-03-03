"use client";

import { CreateAspiration } from "@/server/aspiration";
import { useRef } from "react";
import Swal from "sweetalert2";
import { z } from "zod";

const AspirationFormSchema = z.object({
   to: z.string({ required_error: "To is required" }).min(3, {
      message: "To must be at least 3 characters",
   }),
   from: z.string({ required_error: "From is required" }).min(3, {
      message: "From must be at least 3 characters",
   }),
   anonymous: z.any(),
   subject: z.string({ required_error: "Subject is required" }).min(5, {
      message: "Subject must be at least 5 characters",
   }),
   message: z.string({ required_error: "Message is required" }).min(10, {
      message: "Message must be at least 10 characters",
   }),
});

export default function AspirationForm() {
   const formHtml = useRef<HTMLFormElement>(null);

   async function handleSubmit(form: FormData) {
      const result = AspirationFormSchema.safeParse(
         Object.fromEntries(form.entries())
      );
      if (!result.success) {
         let errorMessage = "";
         result.error.issues.forEach((issue) => {
            errorMessage += issue.message + ".\n";
         });
         Swal.fire({
            icon: "error",
            title: "Error",
            text: errorMessage,
         });
         return;
      }
      const data = result.data;
      const anonymous = data.anonymous != null ? true : false;
      data.anonymous = anonymous;
      const response = await CreateAspiration(data);
      if (response.error) {
         Swal.fire({
            icon: "error",
            title: "Error",
            text: response.error as string,
         });
         return;
      }
      Swal.fire({
         icon: "success",
         title: "Success",
         text: "Successfully added your aspiration",
      });
      formHtml.current?.reset();
   }

   return (
      <form action={handleSubmit} ref={formHtml}>
         <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-[1.1rem] font-bold">To:</h1>
            <p className="text-[0.9rem]">
               Ex: Organizations (PUFA COMPUTING, etc.), lecturers, or any
               person in our faculty.
            </p>
            <input
               type="text"
               name="to"
               className="w-[100%] rounded-lg border-2 p-2"
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

            <input
               type="text"
               name="from"
               className="w-[100%] rounded-lg border-2 p-2"
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
   );
}
