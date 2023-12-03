import Link from "next/link";
import Image from "next/image";
import MerchImage from "@/assets/merch.png";

interface CardStoreProps{
    image?: string;
    title: string;
    category: string;
    price:number;
}

export default function CardStore({title,category,price}:CardStoreProps) {
   return (
      <section className="">
         <div className="max-w-xs p-6 rounded-md shadow-md">
            <Image
               src=""
               alt=""
               className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
               <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
               </span>
               <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
               </h2>
            </div>
            <p className="dark:text-gray-100">
               Mauris et lorem at elit tristique dignissim et ullamcorper elit.
               In sed feugiat mi. Etiam ut lacinia dui.
            </p>
         </div>
      </section>
   );
}
