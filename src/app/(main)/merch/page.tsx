import ProductCard from "@/components/merch/ProductCard";
import SideBarMerch from "@/components/merch/SideBarMerch";
import Link from "next/link";

export default function MerchPage() {
   const Product = [
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA Informatics"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA Interior Design"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA VCD"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA Informatics"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA Interior Design"
      },
      {
         imageUrl: "../comingsoon.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUMA VCD"
      },
      
   ];
   return (
      <section className="relative">
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

   <div className="mt-8 block lg:hidden flex justify-end space-x-4 px-20 ">
      <div className="relative">
         <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
               <span className="text-sm font-medium"> Filter</span>
               <span className="transition group-open:-rotate-180">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-4 w-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </span>
            </summary>
            <div className="dropdown-content">
               <label className="block px-4 py-2 text-gray-800 hover:bg-gray-200"><input type="checkbox" className="mr-2"/>All</label>
               <label className="block px-4 py-2 text-gray-800 hover:bg-gray-200"><input type="checkbox" className="mr-2"/>Jacket</label>
               <label className="block px-4 py-2 text-gray-800 hover:bg-gray-200"><input type="checkbox" className="mr-2"/>T-shirt</label>
               <label className="block px-4 py-2 text-gray-800 hover:bg-gray-200"><input type="checkbox" className="mr-2"/>Tumbler</label>
               <label className="block px-4 py-2 text-gray-800 hover:bg-gray-200"><input type="checkbox" className="mr-2"/>Totebag</label>
            </div>
         </details>
      </div>
      
      <div className="relative">
         <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
               <span className="text-sm font-medium"> Organization </span>
               <span className="transition group-open:-rotate-180">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-4 w-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                     />
                  </svg>
               </span>
            </summary>
            <div className="dropdown-content">
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PUFA Computing</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PUMA Informatics</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PUMA Information System</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PUMA VCD</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PUMA Interior Design</a>
            </div>
         </details>
      </div>
   </div>

   <div className="bg-white py-5">
      <div className="lg:grid lg:grid-cols-4 lg:items-start lg:gap-8 px-20 ">
         <SideBarMerch />

         <div className="lg:col-span-3">
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
               <ProductCard Product={Product}/>
            </ul>
         </div>
      </div>
   </div>
</section>

   );
}
