import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface MemberCardProps {
   image: string;
   name: string;
   position: string;
   instagram?: string;
   linkedin?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
   image,
   name,
   position,
   instagram,
   linkedin,
}) => {
   return (
      <div>
         <div className="mx-auto max-w-xs rounded-md">
            <div className="flex justify-center">
               <div className="absolute z-20 flex h-72 w-48 items-end justify-center gap-8 rounded-md bg-gray-200 p-4 opacity-0 transition-all duration-300 hover:opacity-80">
                  <Link href="https://www.linkedin.com/company/pumacomputing/">
                     <FaLinkedin size={25} className="" />
                  </Link>
                  <Link href="https://www.instagram.com/pufacomputing">
                     <FaInstagram size={25} className="" />
                  </Link>
               </div>
               <Image
                  src={image}
                  alt={`${name}'s Photo`}
                  width={720}
                  height={1280}
                  loading="lazy"
                  className="relative z-10 mx-auto h-72 w-48 rounded-xl object-cover object-center opacity-100 transition-all hover:opacity-20"
               />
            </div>

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
      </div>
   );
};

export default MemberCard;
