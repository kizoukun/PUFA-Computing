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
      <div className="flex flex-col rounded-lg border-2">
         <div>
            <img
               className="h-48 w-full bg-center object-cover"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
         <div className="flex h-[45%] flex-col justify-between space-y-4 px-2 py-2">
            <div className="flex w-[6rem] justify-center rounded-3xl border border-[#FF6F22] px-2 text-[0.8rem] text-[#FF6F22]">
               {major}
            </div>
            <h1 className="text-[1.2rem] font-bold">{title}</h1>
            <p className="text-[0.9rem] font-light">{date}</p>
         </div>
      </div>
   );
}
