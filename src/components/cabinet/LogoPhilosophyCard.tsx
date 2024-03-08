import Image from "next/image";
import React from "react";

interface LogoPhilosophyCardProps {
   image: string;
   title: string;
   description: string;
}

export default function LogoPhilosophyCard({
   image,
   title,
   description,
}: LogoPhilosophyCardProps) {
   return (
      <div className="group relative block h-64 sm:h-80 lg:h-96">
         <span className="absolute inset-0 border-2 border-dashed border-[#376853]"></span>

         <div className="relative flex h-full transform items-end overflow-hidden border-2 border-[#376853] bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:overflow-visible">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
               <Image
                  alt={`${title}'s logo`}
                  height={150}
                  width={300}
                  src={image}
                  className="object-cover p-5"
               />
               {/* <img
                  src={image}
                  width={150}
                  height={150}
                  alt=""
                  className="bg-black"
               /> */}
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
               <p className="mt-8 font-bold">Philosophy</p>
               <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

               <p className="mt-4 max-w-[15rem] text-sm sm:text-base">
                  {description}
               </p>
            </div>
         </div>
      </div>
   );
}
