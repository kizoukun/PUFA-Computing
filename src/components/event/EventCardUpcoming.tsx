import React from 'react';
import Link from 'next/link';
import Event from '@/models/event';

export default function EventCardUpcoming({ events }: { events: Event[] }) {

   return (
      // Upcoming Max Events is 2
      <div className="grid scale-90 grid-cols-1 gap-12 md:scale-100 md:grid-cols-2 md:gap-8">
         {events.map((event, index) => (
            <div key={index} className="flex max-w-[35rem] gap-4 rounded-lg shadow-lg">
               <div className="h-[300px] w-[250px] scale-110 rounded-lg bg-[#E50D0D]"></div>
               <div className="max-w-[20rem] space-y-10 p-6">
                  <h1 className="text-[1.0rem] font-[600]">
                     {event.title}
                  </h1>
                  <h1 className="text-[0.8rem]">
                     {event.start_date.toDateString()}
                  </h1>
                  <p className="text-[0.8rem]">
                     {event.description}
                  </p>
                  <div className="flex justify-between">
                     <h1 className="font-[600]">{event.organization}</h1>
                     <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                        <h1 className="text-[#E50D0D]">{event.status}</h1>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
