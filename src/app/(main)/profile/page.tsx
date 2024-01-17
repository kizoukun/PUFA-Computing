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
                     <Input htmlFor="full-name" label="Full Name" type="text" placeholder="Muhammad Ilham Pratama" />
                  </div>
                  <div>
                     <Input htmlFor="phone-number" label="Phone Number" type="number" placeholder="0851" />
                  </div>
               </div>
               <div className="mb-4">
                  <Input htmlFor="email-address" label="Email Address" type="email" placeholder="ipe@gmail.com" />
               </div>
               <div className="">
                  <div className="mb-4">
                     <Selects htmlFor="major" label="Major" defaults={["informatics"]} options={Major} />
                  </div>
                  <div>
                     <Selects htmlFor="batch" label="Batch" defaults={["2023"]} options={Batch} />
                  </div>
               </div>
               
            </form>
         </div>
         <div className="mt-6 w-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-[30%]">
            <h2 className="mb-6 text-lg font-semibold">Profile Photo</h2>
            <div className="flex flex-col items-center">
               <div className="mb-4">
                  {/* <Avatar>
              <AvatarImage alt="Profile photo" src="/placeholder.svg?height=100&width=100" />
              <AvatarFallback>IP</AvatarFallback>
            </Avatar> */}
               </div>
               <div className="mb-6">
                  {/* <Button variant="ghost">Edit your photo</Button>
            <Button className="text-red-500" variant="ghost">
              Delete
            </Button> */}
               </div>
               <div className="mb-6 rounded-lg border-2 border-dashed border-gray-300 p-4 text-center">
                  {/* <CameraIcon className="mb-2 text-gray-400" /> */}
                  <p className="text-sm text-gray-500">
                     Recommended dimensions:
                     <br />
                     at least 400x400. Max size: 2MB
                  </p>
               </div>
               <div className="flex justify-end space-x-2">
                  <Button className="border-[#FF6F22] px-10 py-2 text-[#FF6F22] hover:bg-[#FF6F22] hover:text-white">
                     Save
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
