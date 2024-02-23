import Image from "next/image";
import React from "react";

interface VAMCProps {
   image: string;
   title: string;
   details: string;
}

export default function VisionAndMissionCard({
   image,
   title,
   details,
}: VAMCProps) {
   return (
      <div className="flex flex-col items-center space-y-2 rounded-xl border bg-white opacity-90 hover:scale-110 hover:shadow-2 xl duration-300">
         <Image
            src={image}
            alt="PUMA Photo"
            width="60"
            height="60"
            className="py-5"
         />
         <h4 className="rounded-2xl border border-[#F6931A66] px-8 py-1 text-[15px] font-[600] text-[#376853]">
            {title}
         </h4>
         <p className="px-4 py-6 text-center text-[15px] font-[600] text-[#376853]">
            {details}
         </p>
      </div>
   );
}
