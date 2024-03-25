"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import Seperator from "@/components/Seperator";
import { GetUserProfile } from "@/services/api/user";
import User from "@/models/user";
import Image from "next/image";

export default function DashboardProfilePage() {
   const [loading, setLoading] = React.useState(true);
   const [userData, setUserData] = React.useState<User>();

   // Fetch user data
   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const userData = await GetUserProfile();
            setUserData(userData);
            setLoading(false);
         } catch (error) {
            console.error("Error fetching user data:", error);
         }
      };

      fetchData().then((r) => r);
   }, []);

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
      <div className="grid grid-cols-1 gap-5 p-4 lg:grid-cols-2">
         <div>
            <div className="rounded-lg border border-[#CBCBCB] bg-white shadow-lg">
               <div className="mt-2 px-6 py-3">
                  <p className="text-[16px] font-[500]">Personal Information</p>
               </div>
               <Seperator className="border-gray-100" />
               <div className="mt-2 space-y-6 px-6 py-3 pb-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     <Input
                        htmlFor="first-name"
                        label="First Name"
                        type="text"
                        placeholder={userData?.first_name}
                        disabled
                     />
                     <Input
                        htmlFor="last-name"
                        label="Last Name"
                        type="text"
                        placeholder={userData?.last_name}
                        disabled
                     />
                  </div>
                  <div>
                     <Input
                        htmlFor="email-address"
                        label="Email Address"
                        type="email"
                        placeholder={userData?.email}
                        disabled
                     />
                  </div>
                  <div>
                     <Input
                        htmlFor="major"
                        label="Major"
                        type="text"
                        placeholder={userData?.major}
                        disabled
                     />
                  </div>
                  <div>
                     <Input
                        htmlFor="batch"
                        label="Batch"
                        type="text"
                        placeholder={userData?.year}
                        disabled
                     />
                  </div>
                  <div className="mt-16 flex justify-end space-x-2">
                     <Button
                        disabled
                        className="border-[#02ABF3] px-8 py-2 text-[#02ABF3] hover:bg-[#02ABF3] hover:text-white"
                     >
                        Cancel
                     </Button>
                     <Button
                        disabled
                        className="border-[#02ABF3] bg-[#02ABF3] px-8 py-2 text-white hover:bg-white hover:text-[#02ABF3]"
                     >
                        Save
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="rounded-lg border border-[#CBCBCB] bg-white shadow-lg">
               <div className="mt-2 px-6 py-3">
                  <p className="text-[16px] font-[500]">Profile Photo</p>
               </div>
               <Seperator className="border-gray-100" />
               <div className="p-6">
                  <div className="mb-4">
                     <div className="flex gap-3">
                        <div className="">
                           <Image
                              src="/aot.jpg"
                              alt=""
                              className="h-14 w-14 rounded-full"
                              width={480}
                              height={240}
                           />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                           <button disabled className="font-medium">
                              Edit your photo
                           </button>
                           <button
                              disabled
                              className="text-[0.9rem] font-light text-gray-600"
                           >
                              Delete
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="text-[#353535]">
                     <label
                        htmlFor="dropzone-file"
                        className="mx-auto mt-2 flex w-full max-w-xl cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-[#CBCBCB] bg-white p-16 text-center"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-8 w-8 text-gray-500 dark:text-gray-400"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                           />
                        </svg>

                        <h2 className="mt-1 font-medium tracking-wide">
                           Add Profile Picture
                        </h2>

                        <p className="mt-2 text-xs tracking-wide ">
                           Upload or darg & drop your file SVG, PNG, or JPG.{" "}
                        </p>

                        <input disabled
                           id="dropzone-file"
                           type="file"
                           className="hidden"
                        />
                     </label>
                  </div>
                  <div className="mt-6 flex justify-end space-x-2">
                     <Button
                        disabled
                        className="border-[#02ABF3] px-8 py-2 text-[#02ABF3] hover:bg-[#02ABF3] hover:text-white"
                     >
                        Cancel
                     </Button>
                     <Button className="border-[#02ABF3] bg-[#02ABF3] px-8 py-2 text-white hover:bg-white hover:text-[#02ABF3]">
                        Save
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
