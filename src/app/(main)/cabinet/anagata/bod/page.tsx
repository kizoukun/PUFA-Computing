import Link from "next/link";
import React from "react";

export default function page() {
   return (
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
         <div className="items-center space-x-2">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#1FA820] pl-5 ">
               <h1 className="text-6xl font-black tracking-widest">
                  BOARD OF DIRECTOR
               </h1>
               <div className="flex-cols-2 flex max-w-2xl gap-2 ">
                  <h2 className="text-stroke text-5xl font-thin tracking-widest text-white">
                     DIVISION
                  </h2>

                  <p className="text-[15px] font-[600] text-[#353535] text-justify">
                     is a representative of the highest division consisting of
                     Chairperson, Vice Chairperson, Secretary and Treasurer.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
