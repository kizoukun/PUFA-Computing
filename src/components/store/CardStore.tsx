import Link from "next/link";

interface CardStoreProps {
   image?: string;
   title: string;
   category: string;
   price: number;
}

export default function CardStore({
   image,
   title,
   category,
   price,
}: CardStoreProps) {
   return (
      <Link href="/">
         <div className="max-w-xs aspect-square p-3 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#BA704F] transition duration-300 ease-in-out border border-[#BA704F] hover:scale-105">
            <img
               src={image}
               alt={`${title}'s images`}
               className="object-cover object-center rounded-md aspect-square "
            />
            <div className="mt-3 mb-2">
               <h2 className="text-xl font-semibold tracking-wide text-left">
                  {title}
               </h2>
               <div className="flex justify-start">
                  <div className="text-left inline-block border text-sm border-[#BA704F] text-[#BA704F] px-3 rounded-2xl m-2">
                     {category}
                  </div>
               </div>
               <h2 className="text-xl font-semibold tracki text-left">
                  Rp {price.toFixed(3)}
               </h2>
            </div>
         </div>
      </Link>
   );
}
