import Link from "next/link";
import Button from "@/components/Button";

/**
 * StudyProgCard component represents a card for displaying information about a study program.
 *
 * @component
 * @example
 * // Example usage of StudyProgCard component
 * <StudyProgCard
 *    title="Computer Science"
 *    article="Explore the fascinating world of computer science and its applications."
 *    link="/study-programs/computer-science"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the study program.
 * @param {string} props.article - A brief description or article about the study program.
 * @param {string} [props.link] - The optional link to navigate to when the "See Details" button is clicked.
 * @returns {JSX.Element} React component
 */

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
      <div className="rounded-lg bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#54A8E2]">
         <p className="text-2xl md:text-base">{title}</p>
         <hr className="mx-auto mb-12 mt-4 w-16 border border-[#3C99DC]" />
         <p className="my-16 hidden md:block">{article}</p>
         <Link href={link || "/"}>
            <Button className="mx-auto my-4 w-max">See Details</Button>
         </Link>
      </div>
   );
}
