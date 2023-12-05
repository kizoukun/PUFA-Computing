
/**
 * CardSecondaryNewsPage component represents a card for displaying secondary news in a news page.
 *
 * @component
 * @example
 * // Example usage of CardSecondaryNewsPage component
 * <CardSecondaryNewsPage
 *    major="Science"
 *    image="/path/to/news-image.jpg"
 *    title="New Scientific Discoveries in Space Exploration"
 *    date="December 18, 2023"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.major - The major or category of the news.
 * @param {string} props.image - The path to the news image.
 * @param {string} props.title - The title or headline of the news.
 * @param {string} props.date - The date when the news was published.
 * @returns {JSX.Element} React component
 */

interface CardSecondaryNewsPageProps {
   major: string;
   image: string;
   title: string;
   date: string;
}

export default function CardSecondaryNewsPage({
   major,
   image,
   title,
   date,
}: CardSecondaryNewsPageProps) {
   return (
      <div className="border-2 rounded-lg h-[25rem] w-[50%] flex flex-col">
         <div className="h-[65%]">
            <img
               className="w-full h-full object-cover bg-center"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
         <div className="h-[45%] flex flex-col justify-between px-2 py-2">
            <div className="border-[#FF6F22] border rounded-3xl text-[#FF6F22] text-[0.8rem] px-2 w-[6rem] flex justify-center">
               {major}
            </div>
            <h1 className="font-bold text-[1.2rem]">{title}</h1>
            <p className="font-light text-[0.9rem]">{date}</p>
         </div>
      </div>
   );
}
