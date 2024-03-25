import Image from "next/image";
import React from "react";

/**
 * Props for the LectureCard component.
 */
interface LectureCardProps {
   /**
    * The path or URL to the lecturer's image.
    */
   image: string;

   /**
    * The name of the lecturer.
    */
   name: string;

   /**
    * The position or title of the lecturer.
    */
   position?: string;
}

/**
 * LectureCard component for displaying information about a lecturer.
 *
 * @component
 * @example
 * const lecturer: LectureCardProps = {
 *   image: "path/to/lecturer-image.jpg",
 *   name: "John Doe",
 *   position: "Professor of Computer Science",
 * };
 * <LectureCard {...lecturer} />
 *
 * @param {LectureCardProps} props - The properties of the LectureCard component.
 * @returns {JSX.Element} - The rendered LectureCard component.
 */
const LectureCard: React.FC<LectureCardProps> = ({ image, name, position }) => {
   return (
      <div className="flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-110">
         <Image
            className="aspect-[3/4] rounded-lg object-cover"
            src={image}
            alt={`${name}'s photo`}
            width={1920}
            height={1080}
         />
         <h1 className="text-[1.2rem] font-bold">{name}</h1>
         <h1 className="text-[0.8rem] font-bold italic text-[#0C8CE9]">
            {position}
         </h1>
      </div>
   );
};

export default LectureCard;
