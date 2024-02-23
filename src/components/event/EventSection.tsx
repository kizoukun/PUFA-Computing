import React, { useEffect, useState } from "react";
import { fetchEvents } from "@/services/api/event";
import Link from "next/link";
import Button from "@/components/Button";
import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventSection() {
   const events = await fetchEvents();

   return (
      <div className="">
         <div>
            <EventCardUpcoming events={events} />
         </div>
         <EventCardCompleted events={events} />

         {/* button */}
         <div className="mt-4 flex items-center justify-center">
            <Link href="/events" className="block w-max">
               <Button className="border-[#E50D0D] px-10 py-2 text-[#E50D0D] hover:bg-[#E50D0D] hover:text-white">
                  See all Events
               </Button>
            </Link>
         </div>
      </div>
   );
}
