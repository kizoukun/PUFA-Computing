import Link from "next/link";
import React from "react";

export default function page() {
   return (
      <section className="flex flex-col space-y-12 border px-[10rem] py-[2rem]">
         {/* text logo nya  */}
         <div className="flex flex-col border-l-4 border-[#1FA820] pl-8">
            <h1 className="text-[3rem] font-[900] uppercase tracking-widest">
               Board of Director
            </h1>
            <div className="flex items-center gap-2">
               <h1 className="text-[3rem] font-thin uppercase tracking-widest text-stroke-1 text-stroke-black text-stroke-fill-white">
                  Division
               </h1>
               <h1 className="max-w-[20rem] text-[0.8rem]">
                  is a presentitive of the highest divison consisting of
                  Chairperson, Vice Chairperson, Secretary and Treasurer.
               </h1>
            </div>
         </div>

         {/* gambarnya  */}
         <div className="h-[363px] w-[645px] rounded-lg bg-[#1FA820]"></div>
      </section>
   );
}
