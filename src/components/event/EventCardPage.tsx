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

import Image from "next/image";
import React from "react";

interface EventCardPageProps {
   title: string;
   status: string;
   participant: string;
   major: string;
   image: string;
   children: React.ReactNode;
}

export default function EventCardPage({
   title,
   status,
   major,
   participant,
   image,
   children,
}: EventCardPageProps) {
   return (
      <div className="flex gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:gap-8">
         <div>
            <Image
               src={image}
               className="h-full w-96 scale-110 rounded-[15px]"
               alt="Event"
               width={384}
               height={256}
            />
         </div>
         <div className="flex flex-col justify-between space-y-4 p-2 md:p-5">
            <p className="text-lg font-bold">{title}</p>
            <p className="font-bold">{participant}</p>
            <p className="text-sm md:text-base">{children}</p>
            <div className="flex justify-between">
               <p className="text-[16px] font-bold">{major}</p>
               <div>
                  <button className="rounded-[10px] border border-[#E50D0D] px-2">
                     {status}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
