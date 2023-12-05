import Link from "next/link";
import Button from "@/components/Button";

interface StudyProgCardProps {
   title: string;
   article: string;
   link?: string;
}

export default function StudyProgCard({
   title,
   article,
   link,
}: StudyProgCardProps) {
   return (
      <div className="bg-white hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#54A8E2] transition-all duration-300 shadow-lg rounded-lg p-3">
         <p>{title}</p>
         <hr className="mt-4 mb-12 border border-[#3C99DC] w-16 mx-auto" />
         <p className="my-16 hidden md:block">{article}</p>
         <Button className="w-max mx-auto my-4">See Details</Button>
      </div>
   );
}
