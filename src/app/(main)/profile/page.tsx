import Button from "@/components/Button";
import Input from "@/components/Input";
import Selects from "@/components/Selects";
import React from "react";

export default function page() {
   const Major = [
      { value: "informatics", label: "Informatics" },
      { value: "information System", label: "Information System" },
      {
         value: "visual communication design",
         label: "Visual Communication Design",
      },
      { value: "interior design", label: "Interior Design" },
   ];

   const Batch = [
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
   ];

   return (
      <div className="flex flex-col justify-center space-y-6 py-10 md:flex-row md:space-x-10 md:space-y-0">
         <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-[40%]">
            <h2 className="mb-6 text-lg font-semibold">Personal Information</h2>
            <form action="">
               <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                     <Input
                        htmlFor="full-name"
                        label="Full Name"
                        type="text"
                        placeholder="Muhammad Ilham Pratama"
                     />
                  </div>
                  <div>
                     <Input
                        htmlFor="phone-number"
                        label="Phone Number"
                        type="number"
                        placeholder="0851"
                     />
                  </div>
               </div>
               <div className="mb-4">
                  <Input
                     htmlFor="email-address"
                     label="Email Address"
                     type="email"
                     placeholder="ipe@gmail.com"
                  />
               </div>
               <div className="">
                  <div className="mb-4">
                     <Selects
                        htmlFor="major"
                        label="Major"
                        defaults={["informatics"]}
                        options={Major}
                     />
                  </div>
                  <div>
                     <Selects
                        htmlFor="batch"
                        label="Batch"
                        defaults={["2023"]}
                        options={Batch}
                     />
                  </div>
               </div>
               <div className="mt-6 flex justify-end space-x-2">
                  <Button className="border-[#02ABF3] px-8 py-2 text-[#02ABF3] hover:bg-[#02ABF3] hover:text-white">
                     Cancel
                  </Button>
                  <Button className="border-[#02ABF3] bg-[#02ABF3] px-8 py-2 text-white hover:bg-white hover:text-[#02ABF3]">
                     Save
                  </Button>
               </div>
            </form>
         </div>
         <div className="mt-6 w-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-[30%]">
            <h2 className="mb-6 text-lg font-semibold">Profile Photo</h2>
            <div className="flex flex-col items-center">
               <div className="mb-4">
                  <div className="relative grid grid-cols-2">
                     <img
                        src="https://source.unsplash.com/50x50/?portrait"
                        alt=""
                        className="h-12 w-12 rounded-full border"
                     />
                     <div className="mb-6">
                        <Button>Edit your photo</Button>
                        <Button className="text-red-500">Delete</Button>
                     </div>
                  </div>
               </div>
               <div>
                  <label
                     htmlFor="dropzone-file"
                     className="mx-auto mt-2 flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-8 w-8 text-gray-500 dark:text-gray-400"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                     </svg>

                     <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                        Add Profile Picture
                     </h2>

                     <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                        Upload or darg & drop your file SVG, PNG, or JPG.{" "}
                     </p>

                     <input id="dropzone-file" type="file" className="hidden" />
                  </label>
               </div>
               <div className="mt-6 flex justify-end space-x-2">
                  <Button className="border-[#02ABF3] px-8 py-2 text-[#02ABF3] hover:bg-[#02ABF3] hover:text-white">
                     Cancel
                  </Button>
                  <Button className="border-[#02ABF3] bg-[#02ABF3] px-8 py-2 text-white hover:bg-white hover:text-[#02ABF3]">
                     Save
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
