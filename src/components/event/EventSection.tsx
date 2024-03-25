import { fetchEvents } from "@/services/api/event";
import Link from "next/link";
import Button from "@/components/Button";
import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";
import EventCardMobile from "./EventCardMobile";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventSection() {
   const events = await fetchEvents();

   if (!events) return <div>Failed to fetch data...</div>;

   const upcomingEvents = events
      .filter((event) => event.status === "Open")
      .slice(0, 2);
   const completedEvents = events
      .filter((event) => event.status == "Upcoming")
      .slice(0, 3);

   return (
      <div>
         <div className="hidden md:block">
            <EventCardUpcoming events={upcomingEvents} />
         </div>
         <div className="block md:hidden px-[1rem]">
            <EventCardMobile events ={upcomingEvents}/>
         </div>

         <EventCardCompleted events={completedEvents} />
      </div>
   );
}
