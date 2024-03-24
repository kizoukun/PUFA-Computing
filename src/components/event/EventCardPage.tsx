import Image from "next/image";
import Event from "@/models/event";
import React from "react";
import Link from "next/link";

export default function EventCardPage({ events }: { events: Event[] }) {
   const calculateDaysLeft = (endDate: Date) => {
      const today = new Date();
      const differenceInTime = endDate.getTime() - today.getTime();
      return Math.ceil(
         differenceInTime / (1000 * 60 * 60 * 24)
      );
   };

   return (
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
         {events.map((event) => (
            <Link key={event.id} href={`/events/${event.slug}`}>
               <div key={event.id}>
                  <div className="flex cursor-pointer gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:gap-8">
                     <div className="relative">
                        <Image
                           src={event.thumbnail}
                           className="h-full w-96 scale-110 rounded-[15px]"
                           alt={`${event.title}'s poster`}
                           width={384}
                           height={256}
                        />
                        {calculateDaysLeft(event.end_date) > 0 && (
                           <span className="absolute -top-1 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                              {`${calculateDaysLeft(event.end_date)} days left`}
                           </span>
                        )}
                     </div>
                     <div className="flex flex-col justify-between space-y-4 p-2 md:p-4">
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
                        <p className="text-sm md:text-base">
                           {event.description}
                        </p>
                        <div className="flex justify-between">
                           <p className="text-[16px] font-bold ">
                              {event.organization}
                           </p>
                           <div>
                              <button className="rounded-[10px] border border-[#E50D0D] px-2">
                                 {event.status}
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
}
