import Link from "next/link";

/**
 * CardStore component represents a card for displaying information about a product in a store.
 *
 * @component
 * @example
 * // Example usage of CardStore component
 * <CardStore
 *    image="/path/to/product.jpg"
 *    title="Product Title"
 *    category="Electronics"
 *    price={1500000}
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} [props.image] - The path to the product image.
 * @param {string} props.title - The title or name of the product.
 * @param {string} props.category - The category or type of the product.
 * @param {number} props.price - The price of the product.
 * @returns {JSX.Element} React component
 */

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
         <div className="aspect-square max-w-xs rounded-2xl border border-[#BA704F] p-3 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#BA704F]">
            <img
               src={image}
               alt={`${title}'s cover`}
               className="aspect-square rounded-md object-cover object-center "
            />
            <div className="mb-2 mt-3">
               <h2 className="text-left text-xl font-semibold tracking-wide">
                  {title}
               </h2>
               <div className="flex justify-start">
                  <div className="m-2 inline-block rounded-2xl border border-[#BA704F] px-3 text-left text-sm text-[#BA704F]">
                     {category}
                  </div>
               </div>
               <h2 className="tracki text-left text-xl font-semibold">
                  Rp {price.toFixed(3)}
               </h2>
            </div>
         </div>
      </Link>
   );
}
