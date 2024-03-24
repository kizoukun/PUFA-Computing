import React from "react";

interface PageHeadingProps {
   title: string;
   description: string;
   borderColor: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
   return (
      <section className="flex flex-col bg-[#F2F2F2] px-[5rem] py-[2rem] md:px-[10rem]">
         <div className="border-l-4 border-['${borderColor}'] pl-8">
            <h1 className="text-[2rem] font-[600]">{title}</h1>
            <h1 className="text-[0.8rem]">{description}</h1>
         </div>
      </section>
   );
}
