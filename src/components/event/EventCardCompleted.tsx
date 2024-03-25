import React from "react";
import Link from "next/link";
import Event from "@/models/event";

export default function EventCardCompleted({ events }: { events: Event[] }) {
   const truncateDescription = (description: string, maxLength: number) => {
      if (description.length <= maxLength) {
         return description;
      }
      return description.substring(0, maxLength) + "...";
   };
   return (
      <div className="grid scale-90 grid-cols-1 gap-8 md:scale-75 md:grid-cols-3">
         {events.map((event, index) => (
            <div
               key={index}
               className="max-w-[25rem] space-y-6 rounded-lg border border-[#E50D0D] p-6"
            >
               <h1 className="text-[1.2rem] font-[600]">{event.title}</h1>
               <p className="text-justify text-sm md:text-base">
                  {truncateDescription(event.description, 150)}{" "}
               </p>{" "}
               <div className="flex justify-between">
                  <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                     <h1 className="text-[0.8rem] text-[#E50D0D]">
                        {event.status}
                     </h1>
                  </div>
                  <Link href={`/events/${event.slug}`}>Read More</Link>
               </div>
            </div>
         ))}
      </div>
   );
}
