import Link from "next/link";
import Button from "@/components/Button";

interface VCDStudyProgCardProps {
   title: string;
   article: string;
   link?: string;
}

export default function VCDStudyProgCard({
   title,
   article,
   link,
}: VCDStudyProgCardProps) {
   return (
      <div className="rounded-lg bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#54A8E2]">
         <p className="text-2xl md:text-base">{title}</p>
         <hr className="mx-auto mb-12 mt-4 w-16 border border-[#3C99DC]" />
         {/* Hide the article on small screens (mobile) */}
         <p className="my- hidden md:block">{article}</p>
         <Button className="mx-auto my-4 w-max">See Details</Button>
      </div>
   );
}

// pls how to make this stuff
