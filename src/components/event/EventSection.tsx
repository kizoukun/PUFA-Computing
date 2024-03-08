import { fetchEvents } from "@/services/api/event";
import Link from "next/link";
import Button from "@/components/Button";
import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventSection() {
   const events = await fetchEvents();

	if(!events) return <div>Failed to fetch data...</div>

   const upcomingEvents = events.filter(event => event.status === "Open").slice(0, 2);
   const completedEvents = events.filter(event => event.status == "Upcoming").slice(0, 3);

   return (
      <div>
         <EventCardUpcoming events={upcomingEvents} />

         <EventCardCompleted events={completedEvents} />
      </div>
   );
}
