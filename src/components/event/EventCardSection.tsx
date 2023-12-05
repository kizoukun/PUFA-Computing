import React from "react";

/**
 * EventCardSection component represents a card for displaying information about an event.
 *
 * @component
 * @example
 * // Example usage of EventCardSection component
 * <EventCardSection
 *    title="Tech Symposium 2023"
 *    details="Join us for an exciting symposium on the latest in technology."
 *    status="Upcoming"
 *    participant="John Doe, Jane Smith"
 *    major="Computer Science"
 *    image="tech-symposium-2023.jpg"
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the event.
 * @param {string} props.details - Details or description of the event.
 * @param {string} props.status - The status of the event (e.g., Upcoming, Ongoing).
 * @param {string} props.participant - Participants or speakers in the event.
 * @param {string} props.major - The major or category of the event.
 * @param {string} props.image - The path to the image representing the event.
 * @returns {JSX.Element} React component
 */

interface EventCardSectionProps {
   title: string;
   details: string;
   status: string;
   participant: string;
   major: string;
   image: string;
}

export default function EventCardSection({
   title,
   details,
   status,
   major,
   participant,
   image,
}: EventCardSectionProps) {
   return (
    <div className="inline-flex items-center mt-5 text-left">
         <div className="shadow-xl rounded-lg w-[32rem] h-[17rem] relative flex">
            <div className="w-[48%]">{/* DO NOT EDIT */}</div>
            <div className="w-[52%] py-4 px-2 flex flex-col justify-between">
               <h1 className="font-bold text-[1.4rem]">{title}</h1>
               <h2>{participant}</h2>
               <div className="font-light text-[0.8rem] tex">
                  <p>{details}</p>
               </div>
               <div className="flex justify-between">
                  <p className="text-[0.8rem] font-bold">{major}</p>
                  <div className="text-[#E50D0D] border-[#E50D0D] border rounded-2xl px-2 text-[0.8rem]">
                     <p>{status}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="shadow-xl rounded-lg h-[19rem] w-[15rem] absolute">
            <img
               className="w-full h-full object-cover rounded-lg"
               src={`../events/${image}`}
               alt={`${title}'s image`}
            />
         </div>
      </div>
   );
}
