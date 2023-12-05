/**
 * EventCardPage Component
 *
 * This component represents an event card with details such as title, participant,
 * details, major, status, and an associated image.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the event.
 * @param {string} props.details - Details or description of the event.
 * @param {string} props.status - The status of the event (e.g., "Upcoming", "Ongoing").
 * @param {string} props.participant - The participants or target audience for the event.
 * @param {string} props.major - The major or category of the event.
 * @param {string} props.image - The URL or path to the image associated with the event.
 * @returns {JSX.Element} - The rendered JSX element for the EventCardPage component.
 *
 * @example
 * // Example usage of the EventCardPage component
 * <EventCardPage
 *   title="Compshere 2023"
 *   details="Hello everyone! We are from Web Dev WeKaWeKaDotCom..."
 *   status="Upcoming"
 *   participant="Open for All!"
 *   major="PUMA IT"
 *   image="../events/compsphere_2023.png"
 * />
 */

import React from "react";

interface EventCardPageProps {
   title: string;
   details: string;
   status: string;
   participant: string;
   major: string;
   image: string;
}

export default function EventCardPage({
   title,
   details,
   status,
   major,
   participant,
   image,
}: EventCardPageProps) {
   return (
      <div className="inline-flex items-center mt-5 text-left">
         <div className="border-[#E50D0D] border rounded-lg w-[32rem] h-[17rem] relative flex">
            <div className="w-[48%]">{/* DO NOT EDIT */}</div>
            <div className="w-[52%] py-4 px-2 flex flex-col justify-between">
               <h1 className="font-bold text-[1.4rem]">{title}</h1>
               <h2>{participant}</h2>
               <div className="font-light text-[0.8rem]">
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
         <div className="bg-red-400 rounded-lg h-[19rem] w-[15rem] absolute">
            <img
               className="w-full h-full object-cover rounded-lg"
               src={image}
               alt={`${title}'s image`}
            />
         </div>
      </div>
   );
}
