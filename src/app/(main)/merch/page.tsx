import ProductCard from "@/components/ProductCard";
import SideBarMerch from "@/components/SideBarMerch";
import Link from "next/link";

export default function MerchPage() {
   const Product = [
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
      },
   ];
   return (
      <section>
         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
               <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Merchandise Collection
               </h2>

               <p className="mt-4 max-w-md text-gray-500">
                  Discover the Future of Computing with PUFA
                  <br />
                  <span className="text-[#5F9EA0] font-semibold tracking-wider">
                     {" "}
                     Your Ultimate Merchandise Destination!
                  </span>
               </p>
            </header>

            <div className="mt-8 block lg:hidden">
               <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                  <span className="text-sm font-medium">
                     {" "}
                     Filters & Sorting{" "}
                  </span>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-4 w-4 rtl:rotate-180"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                     />
                  </svg>
               </button>
            </div>

            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
               <SideBarMerch />

               <div className="lg:col-span-3">
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                     <ProductCard Products={Product} />
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
