import AspirationCard from "@/components/aspiration/AspirationCard";
import React from "react";

export default function page() {
   return (
      <div>
         {/* // title */}
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#E50D0D] pl-5 ">
               <h1 className="text-[2rem] font-[700] text-[#353535]">
                  Aspirations
               </h1>
               <p className="text-[0.8rem] font-[400] ">
                  A place for computizens to share their aspirations, ideas, and
                  suggestions with us.
               </p>
            </div>
         </section>

         {/* aspirations box  */}
         <section className="px-[10rem] py-16 bg-cover bg-center"
         style={{ backgroundImage: `url('/doodle.svg')` }}>
            <div className="flex flex-col rounded-lg border px-8 py-4 shadow-lg">
               <h1 className=" text-[1.4rem] text-[#656565]">
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
                  <p className="text-[0.9rem]">
                     Share it anonymously (insert toggle button here)
                  </p>
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
                  {/* <textarea name="" id="" cols="30" rows="10" noresize className="rounded-lg border-2 p-2 resize-none"></textarea> */}
               </div>

               <button className="flex self-center rounded-lg border-2 border-gray-300 px-[16rem] py-6 shadow-sm transition-all duration-300 hover:border-white hover:bg-[#0C8CE9] hover:text-white">
                  Submit
               </button>
            </div>
         </section>

         {/* aspirations library */}
         <section className="mb-10 flex flex-col items-center gap-10 ">
            <h1 className="text-[1.8rem] font-bold">Aspirations Library</h1>
            <input
               type="text"
               className="absolute w-[60%] translate-y-14 scale-110 rounded-lg border-2 border-gray-300 p-4"
               placeholder="Search Aspirations"
            />
            <div className="flex w-[100%] flex-col items-center justify-center rounded-3xl border-2 px-[10rem] py-16 shadow-lg">
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
