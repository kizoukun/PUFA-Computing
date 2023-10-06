import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function MerchPage() {
   const items = [
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
      {
         imageUri:
            "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
         name: "T-Shirt",
         price: 100000,
      },
   ];
   return (
      <main className="p-5 bg-gray-50">
         <div className="grid grid-cols-4 gap-5">
            {items.map((item, index) => (
               <div
                  className="bg-white shadow-lg rounded-lg space-y-4 flex flex-col justify-between"
                  key={index}
               >
                  <img
                     src={item.imageUri}
                     alt={item.name}
                     className="w-64 h-64 mx-auto"
                  />
                  <div className="p-3">
                     <p className="text-center text-2xl">{item.name}</p>
                     <Link href={`/merch/${index}`}>
                        <Button className="w-full">Buy</Button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </main>
   );
}
