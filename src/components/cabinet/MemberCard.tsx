import Image from "next/image";

interface MemberCardProps {
   image: string;
   name: string;
   position: string;
}

export default function MemberCard({ image, name, position }: MemberCardProps) {
   return (
      <div className="mx-auto max-w-xs rounded-md">
         <Image
            src={image}
            alt={`${name}'s Photo`}
            width={720}
            height={1280}
            loading="lazy"
            
            className="mx-auto h-72 w-48 rounded-xl object-cover object-center"
         />
         <div className="flex flex-col items-center justify-between space-y-8 p-6">
            <div className="space-y-2">
               <h2 className="text-center text-[1rem] font-[600] capitalize text-[#353535]">
                  {name}
               </h2>
               <p className="text-center text-[0.875rem] font-[400] capitalize text-[#6B7280]">
                  {position}
               </p>
            </div>
         </div>
      </div>
   );
}
