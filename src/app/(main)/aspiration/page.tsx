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
      </div>
   );
}
