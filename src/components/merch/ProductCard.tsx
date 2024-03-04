import Link from "next/link";

interface Product {
   price: number;
   imageUrl: string;
   title: string;
}

interface ProductCardProps {
   Products: Array<Product>;
}

export default function ProductCard({ Products }: ProductCardProps) {
   return (
      <>
         {Products.map((product, index) => (
            <li key={index}>
               <Link
                  href={`/merch/${index}`}
                  className="group block overflow-hidden"
               >
                  <img
                     src={`${product.imageUrl}`}
                     alt={`This is an image of ${product.title}`}
                     className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                     <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {product.title}
                     </h3>

                     <p className="mt-2">
                        <span className="sr-only">Regular Price</span>

                        <span className="tracking-wider text-gray-900">
                           Rp {product.price.toFixed(2)}
                        </span>
                     </p>
                  </div>
               </Link>
            </li>
         ))}
      </>
   );
}
