import Link from "next/link";

interface ProductCardProps {
    title: string;
    image?: string;
    price: number;
}

export default function ProductCard({ title, image, price }: ProductCardProps) {
    return (
        <li>
            <Link href="#" className="group block overflow-hidden">
                <img
                    src={`${image}`}
                    alt={`This is an image of ${title}`}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {title}
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only">Regular Price</span>

                        <span className="tracking-wider text-gray-900">
                            £{price.toFixed(2)} GBP
                        </span>
                    </p>
                </div>
            </Link>
        </li>
    );
}
