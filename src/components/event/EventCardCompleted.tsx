import React from "react";
import Link from "next/link";
import Event from "@/models/event";

export default function EventCardCompleted({ events }: { events: Event[] }) {
   // Filter and sort completed events
   const completedEvents = events
      .filter((event) => new Date(event.end_date) < new Date())
      .sort(
         (a, b) =>
            new Date(b.end_date).getTime() - new Date(a.end_date).getTime()
      )
      .slice(0, 3); // Limit to 3 completed events

   return (
      <div className="mx-auto mt- grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
         {completedEvents.map((event) => (
            <div
               key={event.id}
               className="flex flex-col justify-between rounded-md border-2 border-[#E50D0D] bg-white p-2 md:p-5   py-5 text-[#353535]"
            >
               <p className="mt-0.5 pb-1 text-justify text-2xl font-bold">
                  {event.title}
               </p>
               {/* content */}
               <div className="text-md text-justify font-extralight">
               <hr className="border-2 border-[#E50D0D]" />
                  {event.description}
               </div>
               <div className="mt-4 flex flex-wrap justify-between gap-1">
                  {/* status */}
                  <div className="whitespace-nowrap rounded-full border border-[#E50D0D] bg-white px-2.5 py-0.5 text-xs text-[#E50D0D]">
                     {event.status}
                  </div>
                  <Link
                     href={event.link}
                     className="group inline-flex items-center gap-1 text-sm font-medium hover:bg text-black"
                  >
                     Read more
                  </Link>
               </div>
            </div>
         ))}
      </div>
   );
}
