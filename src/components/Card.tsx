import Link from "next/link";
interface CardProps {
   title: string;
   description: string;
   status: string;
   link: string;
}

export default function Card({ title, description, status, link }: CardProps) {
   return (
      <div className="rounded-md bg-[#E50D0D] p-0.5">
         <div className="rounded-md bg-white pt-20 sm:p-6">
            <div className="text-[#353535]">
               <p className="mt-0.5 border-b-8 border-[#E50D0D] pb-1 text-justify text-2xl font-bold">
                  {title}
               </p>
               {/* content */}
               <div className="text-md mt-4 text-justify font-extralight">
                  {description}
               </div>
               <div className="mt-4 flex flex-wrap justify-between gap-1">
                  {/* status */}
                  <div className="whitespace-nowrap rounded-full border border-[#E50D0D] bg-white px-2.5 py-0.5 text-xs text-[#E50D0D]">
                     {status}
                  </div>
                  <Link
                     href={link}
                     className="group inline-flex items-center gap-1 text-sm font-medium text-black"
                  >
                     Read more
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
