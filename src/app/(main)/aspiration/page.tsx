import AspirationCard from "@/components/aspiration/AspirationCard";
import { CiSearch } from "react-icons/ci";
import React from "react";

export default function page() {
   return (
      <div>
         {/* // title */}
         <section className="bg-[#F2F2F2] p-6 md:p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#E50D0D] pl-2 md:pl-5">
               <h1 className="text-[1.5rem] font-[700] text-[#353535] md:text-[2rem]">
                  Aspirations
               </h1>
               <p className="text-[0.8rem] font-[400] md:text-[0.9rem] ">
                  A place for computizens to share their aspirations, ideas, and
                  suggestions with us.
               </p>
            </div>
         </section>

         {/* aspirations box  */}
         <section
            className="bg-cover bg-repeat bg-center px-4 py-8 md:px-[10rem] md:py-16"
            style={{ backgroundImage: `url('/doodle.svg')` }}
         >
            <div className="flex flex-col rounded-lg border bg-white px-4 py-4 opacity-90 shadow-lg md:px-8 md:py-8">
               <h1 className=" text-[1.4rem] text-[#656565] md:text-[1.8rem]">
                  Share Your Aspirations for Better Computing
               </h1>
               <hr className="my-8 border" />
               <div>
                  <h1 className="text-[1.3rem] ">Hello, Alden Sayidina!</h1>
                  <h1 className="text-[1.3rem] font-bold">
                     Let's fill in this box!
                  </h1>
               </div>
               <hr className="my-8 border" />

               <div className="mb-6 flex flex-col gap-2">
                  <h1 className="text-[1.1rem] font-bold">To:</h1>
                  <p className="text-[0.9rem]">
                     Ex: Organizations (PUFA COMPUTING, etc.), lecturers, or any
                     person in our faculty.
                  </p>
                  <input
                     type="text"
                     className="w-[100%] rounded-lg border-2 p-2"
                  />
               </div>

               <div className="mb-6 flex flex-col gap-2">
                  <h1 className="text-[1.1rem] font-bold">From:</h1>
                  <div className="flex gap-2">
                     <p className="text-[0.9rem]">
                        Share it anonymously 
                     </p>
                     <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="scale-90 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"/>
                     </label>
                  </div>

                  <input
                     type="text"
                     className="w-[100%] rounded-lg border-2 p-2"
                  />
               </div>

               <div className="mb-6 flex flex-col gap-2">
                  <h1 className="text-[1.1rem] font-bold">Subject:</h1>
                  <p className="text-[0.9rem]">Your email etc.</p>
                  <input
                     type="text"
                     className="w-[100%] rounded-lg border-2 p-2"
                  />
               </div>

               <div className="mb-6 flex flex-col gap-2">
                  <h1 className="text-[1.1rem] font-bold">Message:</h1>
                  <p className="text-[0.9rem]">
                     Anything else you want to let us know:
                  </p>
                  <textarea
                     name=""
                     id=""
                     cols={30}
                     rows={10}
                     className="resize-none rounded-lg border-2 p-2 "
                  ></textarea>
               </div>

               <button className="flex self-center rounded-lg border-2 border-[#6B7280] px-6 py-2 shadow-sm transition-all duration-300 hover:border-white hover:bg-[#6B7280] hover:text-white md:px-16 md:py-3">
                  Submit
               </button>
            </div>
            <h1 className="text-center mt-20 text-[35px] font-[700] text-[#353535]">
               Aspirations Library
            </h1>
         </section>

         {/* aspirations library */}
         <section className="mb-6 flex flex-col items-center md:mb-10 ">
            <input
               type="text"
               className="absolute w-[60%] translate-y-[-30px] rounded-lg border-2 border-gray-300 p-4 duration-300 hover:scale-110"
               placeholder="Search Aspirations"
               
            />
            <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-2 p-8 shadow-lg md:px-16 md:py-16">
               <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 ">
                  <AspirationCard />
                  <AspirationCard />
                  <AspirationCard />
                  <AspirationCard />
               </div>
            </div>
         </section>
      </div>
   );
}
