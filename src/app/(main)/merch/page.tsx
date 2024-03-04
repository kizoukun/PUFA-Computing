import Card from "@/components/merch/Card";
import ProductCard from "@/components/merch/ProductCard";
import SideBarMerch from "@/components/merch/SideBarMerch";
import Link from "next/link";

export default function MerchPage() {
   const Product = [
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "Computing Varsity",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
         organization: "PUFA Computing"
      },
      {
         imageUrl: "../aot.jpg",
         price: 100000,
         title: "alief",
         organization: "PUFA Computing"
      },
   ];
   return (
      <section>
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
         <div className="bg-white py-5">
            <div className="lg:grid lg:grid-cols-4 lg:items-start lg:gap-8 px-20 ">
               <SideBarMerch />

               <div className="lg:col-span-3">
                  <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                     {/* <ProductCard Products={Product} /> */}
                     <Card Product={Product}/>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
