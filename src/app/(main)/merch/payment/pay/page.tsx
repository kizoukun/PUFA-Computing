import Seperator from "@/components/Seperator";
import React from "react";

export default function page() {
   return (
      <div>
         <div className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#BA704F] pl-5 ">
               <div className="flex items-center">
                  <p className="text-[35px] font-bold text-[#353535]">
                     Computing Store
                  </p>
               </div>
               <p className="text-[12px] font-[400] text-[#353535]">
                  Special merchandise for all Computizens
               </p>
            </div>
         </div>

         <div className="mx-auto max-w-7xl pt-6 text-[#353535]">
            <p className="text-[24px] font-[400]">
               Great Choices, Muhammad Ilham!
            </p>
            <p className="text-[26px] font-[600]">
               Let's finish the payment, and the item will arrive soon!
            </p>
         </div>
         <div className="py-6">
            <Seperator className="mx-auto max-w-7xl border-[#D1D5DB]" />
         </div>
         <div>
            <p className="mx-auto max-w-7xl text-[24px] font-[500] text-[#353535]">
               Details Order
            </p>
            <p className="mx-auto max-w-7xl text-[16px] font-[500] text-[#6B7280]">
               Details of Your Order
            </p>

            <div className="grid grid-cols-2">
               <div>
                  <p>sda</p>
               </div>
               <div>
                  <p className="text-[16px] font-[600] text-[#353535]">
                     Computing Varsity
                  </p>
                  <p className="text-[20px] font-[600] text-[#BA704F]">
                     Rp. 250.000
                  </p>
                  <div className="flex gap-x-2">
                     <p className="text-[20px] font-[600] text-[#353535]">
                        Color:
                     </p>
                     <label className="justitfy-center flex items-center rounded-2xl border border-[#9DA2A7] px-6 py-1 text-[14px] font-[400] text-[#9DA2A7]">
                        Black n Grey
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
