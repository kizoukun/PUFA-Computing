import Image from "next/image";
import Event from "@/models/event";
import React from "react";

export default function EventCardPage({ events }: { events: Event[] }) {
   return (
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
         {events.map((event) => (
            <div
               key={event.id}
               className="flex flex-col md:flex-row gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:gap-8"
            >
               <div className="relative">
                  <Image
                     src={event.thumbnail}
                     className="w-full h-auto rounded-t-[15px] md:rounded-l-[15px] md:rounded-t-none"
                     alt={`${event.title}'s poster`}
                     width={384}
                     height={256}
                  />
                  {((+event.end_date - +event.start_date) / (1000 * 60 * 60 * 24)) > 0 && (
                    <span className="absolute -top-1 right-0 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                       {`${(+event.end_date - +event.start_date) / (1000 * 60 * 60 * 24)} days left`}
                    </span>
                  )}
               </div>
               <div className="flex flex-col justify-between p-2 md:p-4">
                  <div>
                     <p className="text-lg font-bold">{event.title}</p>
                     <p className="font-[600] text-[#353535]">
                        {`${event.start_date.toLocaleDateString("id-ID", {
                           day: "numeric",
                           month: "long",
                           year: "numeric",
                        })} - ${event.end_date.toLocaleDateString("id-ID", {
                           day: "numeric",
                           month: "long",
                           year: "numeric",
                        })}`}
                     </p>
                  </div>
                  <p className="text-sm md:text-base">{event.description}</p>
                  <div className="flex justify-between mt-auto">
                     <p className="text-[16px] font-bold ">{event.organization}</p>
                     <div>
                        <button className="rounded-[10px] border border-[#E50D0D] px-2">
                           {event.status}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
