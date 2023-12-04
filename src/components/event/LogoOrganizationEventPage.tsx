import React from "react";

interface LogoOrganizationEventPageProps{
    image: string;
    title: string; 
}

export default function LogoOrganizationEventPage({
    image,
    title
}:LogoOrganizationEventPageProps) {
   return (
         <div className="flex flex-col gap-5 items-center justify-center">
            <div className="w-[100px] h-[100px] bg-transparent rounded-xl">
               <img
                  className="w-full h-full object-cover rounded-lg"
                  src={image}
                  alt={`${title}'s image`}
               />
            </div>
            <div className="font-bold text-center text-sm">{title}</div>
         </div>
   );
}
