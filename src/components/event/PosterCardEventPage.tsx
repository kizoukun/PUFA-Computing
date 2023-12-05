import Link from "next/link";

/**
 * PosterCardEventPage component represents a card with a poster image linked to a specific page.
 *
 * @component
 * @example
 * // Example usage of PosterCardEventPage component
 * <PosterCardEventPage
 *    link="/events/event-details"
 *    image="/path/to/poster.jpg"
 *    alt="Event Poster"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.link - The link to navigate to when the poster is clicked.
 * @param {string} props.image - The path to the poster image.
 * @param {string} props.alt - The alternative text for the poster image.
 * @returns {JSX.Element} React component
 */

interface PosterCardEventPageProps{
  link: string;
  image: string;
  alt: string;
}

export default function PosterCardEventPage({
  link,
  image,
  alt
}:PosterCardEventPageProps) {
   return (
      <Link href={`${link}`}>
         <div className="h-[19rem] w-[15rem] rounded-xl hover:scale-105 hover:shadow-md transition duration-300">
            <img
               className="w-full h-full object-cover bg-center rounded-xl"
               src={image}
               alt={alt}
            />
         </div>
      </Link>
   );
}
