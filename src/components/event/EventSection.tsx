import { fetchEvents } from "@/services/api/event";
import Link from "next/link";
import Button from "@/components/Button";
import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";
import EventCardMobile from "./EventCardMobile";
import Loading from "../Loading";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventSection() {
    const events = await fetchEvents();

    if (!events) return <Loading />;

    const today: Date = new Date();

    const upcomingEvents = events
        .filter((event) => new Date(event.start_date) >= today)
        .sort(
            (a, b) =>
                new Date(a.start_date).getTime() -
                new Date(b.start_date).getTime()
        )
        .slice(0, 2);

    const completedEvents = events
        .filter((event) => new Date(event.end_date) < today)
        // Mengambil tiga acara yang paling baru berakhir
        .sort(
            (a, b) =>
                new Date(b.end_date).getTime() - new Date(a.end_date).getTime()
        )
        .slice(0, 3);

    return (
        <div>
            <div className="hidden md:block">
                <EventCardUpcoming events={upcomingEvents} />
            </div>
            <div className="block px-[1rem] md:hidden">
                <EventCardMobile events={upcomingEvents} />
            </div>

            <EventCardCompleted events={completedEvents} />
        </div>
    );
}
