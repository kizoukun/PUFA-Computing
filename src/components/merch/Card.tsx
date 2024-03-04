import Link from "next/link";

interface Product {
   price: number;
   imageUrl: string;
   title: string;
   organization: string;
}

interface ProductCardProps {
   Product: Array<Product>;
}

export default function Card({ Product }: ProductCardProps) {
   return (
      <>
         {Product.map((product, index) => (
            <li key={index}>
               <Link
                  href={`/merch/${index}`}
                  className="group block overflow-hidden rounded-lg border duration-300 hover:scale-110 hover:shadow-xl"
               >
                  <div className="max-w-xs ">
                     <img
                        src={`${product.imageUrl}`}
                        alt={`This is an image of ${product.title}`}
                        className="h-72 w-full object-cover object-center dark:bg-gray-500"
                     />
                     <div className="grid grid-cols-2">

                     </div>
                     <div className="flex flex-col justify-between space-y-2 p-6">
                        <div className="space-y-2">
                           <h2 className="text-[14px] font-[600] text-[#353535] ">
                              {product.title}
                           </h2>
                           <div className="flex">
                              <h2 className="rounded-2xl border border-[#BA704F] px-3 py-1 text-[10px] font-[400] text-[#BA704F] ">
                                 {product.organization}
                              </h2>
                           </div>
                        </div>

                        <p className="tracking-wider text-gray-900">
                           Rp {product.price.toFixed(2)}
                        </p>
                     </div>
                  </div>
               </Link>
            </li>
         ))}
      </>
   );
}
