import Link from "next/link";
import React from "react";

export default function page() {
   return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
         <div className="flex items-center space-x-2">
            <div className="h-32 w-1 bg-green-500" />
            <div>
               <h1 className="text-6xl font-black tracking-wider">
                  BOARD OF DIRECTOR
               </h1>
               <div className="flex">
                  <h2 className="text-stroke text-5xl font-thin tracking-widest text-white">
                     DIVISION
                  </h2>
                  <p className="mt-1 text-sm text-[#353535]">
                     is a representative of the highest division consisting of
                     Chairperson, Vice Chairperson, Secretary and Treasurer.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
