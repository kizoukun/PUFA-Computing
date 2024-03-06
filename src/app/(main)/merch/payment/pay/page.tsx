import Seperator from "@/components/Seperator";
import React from "react";

export default function page() {
   return (
      <>
         {/* header title  */}
         <header className="bg-gray-200 px-[10rem] py-10">
            <div className="border-l-4 border-orange-500 pl-4">
               <h1 className="text-[2rem] font-bold">Computing Store</h1>
               <p className="text-[0.8rem]">
                  Special merchandise for all Computizens
               </p>
            </div>
         </header>

         <section className="space-y-12 px-[10rem] py-10">
            <div className="">
               <h1 className="text-[1.2rem]">Great Choices, Computizen!</h1>
               <h1 className="text-[1.2rem] font-bold">
                  Let's finish up the payment and your item(s) will arrive soon!
               </h1>
            </div>

            <hr className="h-[2px] bg-gray-200" />

            {/* details order  */}
            <div className="flex flex-col gap-4">
               <div>
                  <h1 className="text-[1.2rem] font-bold">Details Order</h1>
                  <h1 className="text-[0.8rem]">Details of your order(s)</h1>
               </div>
               <div className="flex gap-4">
                  <div className="h-[200px] w-[160px] rounded-lg bg-black"></div>
                  <div className="flex flex-col gap-5">
                     <h1 className="text-[1.1rem] font-bold">
                        Computing Varsity
                     </h1>
                     <h1 className="text-[1.1rem] font-bold text-orange-500">
                        Rp. 250,000
                     </h1>
                     <div className="flex items-center gap-4">
                        <h1>Color:</h1>
                        <button className="rounded-xl border border-gray-400 px-4 py-1 text-[0.8rem] text-gray-400">
                           Black n Grey
                        </button>
                     </div>
                     <div className="flex items-center gap-4">
                        <h1>Size:</h1>
                        <button className="ml-3 rounded-xl border border-gray-400 px-4 py-1 text-[0.8rem] text-gray-400">
                           XL
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* notes textbox */}
            <div>
               <input
                  type="text"
                  name=""
                  id=""
                  className="w-[50%] rounded-lg border-2 border-gray-200 p-2"
                  placeholder="Notes"
               />
            </div>

            {/* address info */}
            <div className="flex flex-col gap-2">
               <h1>Address</h1>
               <h1>Let us know where to send your order(s)</h1>
               <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-lg border-2 border-gray-200 p-2"
                  placeholder="SBH, G-444"
               />
            </div>

            {/* payment method  */}
            <div className="flex flex-col gap-10">
               <div>
                  <h1 className="text-[1.2rem] font-bold">Payment Method</h1>
                  <h1 className="text-[0.8rem] text-gray-400">
                     Payment can be made via:
                  </h1>
               </div>

               <div>
                  <h1>BCA:</h1>
                  <h1>6050537330</h1>
                  <h1>a/n Alexandra Verencia Poluakan</h1>
               </div>

               <div>
                  <h1>ShopeePay:</h1>
                  <h1>081294807325</h1>
                  <h1>a/n Dian Vania Jessicha</h1>
               </div>

               <div>
                  <h1>Line Bank/Hana Bank:</h1>
                  <h1>183377746330</h1>
                  <h1>a/n Dinda Ayu Maulina</h1>
               </div>

               <div>
                  <h1 className="text-[1.2rem] font-bold">Contact Person</h1>
                  <h1>0012003483290 (Kevin Marchanda)</h1>
               </div>
            </div>

            {/* submit proof box  */}
            <div className="flex flex-col gap-4">
               <h1 className="text-[1.2rem] font-bold">
                  Submit your payment proof!
               </h1>
               <button className="border-2 border-dashed bg-white py-20">
                  <h1 className="text-gray-400">
                     Click here to upload your payment proof!
                  </h1>
                  <h1 className="text-[0.8rem] italic text-gray-400">
                     Minimum: 1 photo, Maximum: 3 photos
                  </h1>
                  <h1 className="text-gray-400">...</h1>
               </button>
               <div className="mt-6 flex self-center">
                  <button className="rounded-lg border-2 border-gray-300 bg-white px-[12rem] py-4 transition-all duration-200 hover:scale-110 hover:shadow-lg">
                     Submit
                  </button>
               </div>
            </div>
         </section>
      </>
   );
}
