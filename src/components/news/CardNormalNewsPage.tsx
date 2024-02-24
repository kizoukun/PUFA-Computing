import React from "react";

/**
 * CardNormalNewsPage component represents a card for displaying normal news in a news page.
 *
 * @component
 * @example
 * // Example usage of CardNormalNewsPage component
 * <CardNormalNewsPage
 *    image="/path/to/news-image.jpg"
 *    major="Technology"
 *    title="Exciting Developments in AI Technology"
 *    date="December 15, 2023"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.image - The path to the news image.
 * @param {string} props.major - The major or category of the news.
 * @param {string} props.title - The title or headline of the news.
 * @param {string} props.date - The date when the news was published.
 * @returns {JSX.Element} React component
 */

interface CardNormalNewsPageProps {
   image: string;
   major: string;
   title: string;
   date: string;
}

export default function CardNormalNewsPage({
   image,
   major,
   title,
   date,
}: CardNormalNewsPageProps) {
   return (
      <div className="flex flex-col rounded-lg border-2 hover:scale-110 hover:shadow-xl duration-300">
         <div>
            <img
               className="h-full w-full bg-center object-cover"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
         <div className="flex h-[40%] flex-col justify-between px-4 py-2">
            <div className="flex w-[6rem] justify-center rounded-3xl border border-[#FF6F22] px-2 text-[0.8rem] text-[#FF6F22]">
               {major}
            </div>
            <h1 className="font-bold">{title}</h1>
            <p className="text-[0.8rem]">{date}</p>
         </div>
      </div>
   );
}
