import React from "react";
import Link from "next/link";
import Event from "@/models/event";

export default function EventCardUpcoming({ events }: { events: Event[] }) {
   const currentDate = new Date();
   const upcomingEvents = events
      .filter((event) => new Date(event.end_date) > currentDate)
      .sort(
         (a, b) =>
            new Date(a.end_date).getTime() - new Date(b.end_date).getTime()
      );

   return (
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2">
         {upcomingEvents.map((event) => (
            <div className="rounded-md bg-[#E50D0D] p-0.5" key={event.id}>
               <div className="rounded-md bg-white pt-20 sm:p-6">
                  <div className="text-[#353535]">
                     <p className="mt-0.5 border-b-8 border-[#E50D0D] pb-1 text-justify text-2xl font-bold">
                        {event.title}
                     </p>
                     {/* content */}
                     <div className="text-md mt-4 text-justify font-extralight">
                        {event.description}
                     </div>
                     <div className="mt-4 flex flex-wrap justify-between gap-1">
                        {/* status */}
                        <div className="whitespace-nowrap rounded-full border border-[#E50D0D] bg-white px-2.5 py-0.5 text-xs text-[#E50D0D]">
                           {event.status}
                        </div>
                        <Link
                           href={event.link}
                           className="group inline-flex items-center gap-1 text-sm font-medium text-black"
                        >
                           Read more
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
