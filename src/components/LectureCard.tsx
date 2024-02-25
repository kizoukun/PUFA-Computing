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
   position: string;
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
      <div>
         <Image
            className="aspect-square rounded-lg object-cover"
            src={image}
            alt={`${name}'s photo`}
            width={1920}
            height={1080}
         />
         <h3 className="text-lg font-medium leading-6 text-gray-900">{name}</h3>
         <p className="text-[18px] font-[500] text-[#0C8CE9]">{position}</p>
      </div>
   );
};

export default LectureCard;
