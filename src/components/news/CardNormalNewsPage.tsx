import React from "react";

interface CardNormalNewsPageProps {
   image: string;
   major: string;
   title: string;
   date: string;
}

export default function CardNormalNewsPage({
   image,
   major,
   title,
   date,
}: CardNormalNewsPageProps) {
   return (
      <div className="border-2 rounded-lg h-[21rem] flex flex-col">
         <div className="h-[60%]">
            <img
               className="w-full h-full object-cover bg-center"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
         <div className="h-[40%] flex flex-col px-4 py-2 justify-between">
            <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
               {major}
            </div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-[0.8rem]">{date}</p>
         </div>
      </div>
   );
}
