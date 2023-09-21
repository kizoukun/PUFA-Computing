import Link from "next/link";

export default function Card() {
   return (
      <div className="p-0.5 rounded-md bg-[#E50D0D]">
         <div className="rounded-md bg-white pt-20 sm:p-6">
            <div className="text-[#353535]">
               <p className="mt-0.5 text-2xl text-justify font-bold border-b-8 border-[#E50D0D] pb-1">
                  Computing Social Project 2023
               </p>
               {/* content */}
               <div className="mt-4 text-md font-extralight text-justify">
                  with{" "}
                  <span className="font-semibold">
                     Rumah Tahfidz Taman Qur’ani
                  </span>
               </div>
               <div className="mt-4 flex flex-wrap gap-1 justify-between">
                  {/* status */}
                  <div className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-xs text-[#E50D0D] border border-[#E50D0D]">
                     Completed
                  </div>
                  <Link
                     href="#"
                     className="group inline-flex items-center gap-1 text-sm font-medium text-black"
                  >
                     Read more
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
