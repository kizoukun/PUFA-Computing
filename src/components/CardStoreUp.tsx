import Link from "next/link";
interface CardStoreUpProps {
   image: string;
   number: string;
   title: string;
   description: string;
   bgColor: string;
}

export default function CardStoreUp({
   image,
   number,
   title,
   description,
   bgColor,
}: CardStoreUpProps) {
   const cardClassName = `flex flex-col shadow-xl mx-auto max-w-sm ${bgColor} py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md`;

   return (
      <article className={cardClassName}>
         <div className="min-h-62">
            <img className="mx-auto" src={image} alt="" />
         </div>
         <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
            {number}.
         </h1>
         <h2 className="font-bold mb-5 text-gray-800">{title}</h2>
         <p className="text-sm leading-relaxed text-gray-700">{description}</p>
      </article>
   );
}
