import React from "react";
import Button from "../Button";

interface EventDetailsProps {
   image?: string;
   title: string;
   content: string;
}

export default function EventDetails({
   image,
   title,
   content,
}: EventDetailsProps) {
   return (
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
         <div className="flex items-center justify-center">
            <img
               alt={`${title}'s poster`}
               className="aspect-[5/7] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
               height={700}
               src={image}
               width={500}
            />
         </div>
         <div className="grid items-start gap-4 md:gap-10">
            <div className="grid gap-4 rounded-xl border border-[#CBCBCB] p-2">
               <h1 className="text-md font-semibold lg:text-2xl">{title}</h1>
               <div>
                  <p className="text-justify">{content}</p>
               </div>
               <div className="flex items-center justify-center">
                  <Button className="border-[#353535] w-5/6 py-2 text-[#353535] hover:bg-[#353535] hover:text-white">
                     See Details
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
