import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";
import EventCardMobile from "./EventCardMobile";
import { db } from "@/lib/db";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventSection() {
    const events = await db.event.findMany({
        select: {
            id: true,
            title: true,
            uniqueId: true,
            thumbnail: true,
            startDate: true,
            endDate: true,
            description: true,
            organization: {
                select: {
                    name: true,
                },
            },
        },
        orderBy: {
            startDate: "asc",
        },
    });

    if (!events) return <div>Failed to fetch data...</div>;

    const today: Date = new Date();

    // 2 Highlighted Closest Events either upcoming or open
    const upcomingEvents = events
        .filter((event) => new Date(event.endDate) >= today)
        .sort(
            (a, b) =>
                new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
        )
        .slice(0, 2);

    const completedEvents = events
        .filter((event) => new Date(event.endDate) < today)
        // Mengambil tiga acara yang paling baru berakhir
        .sort(
            (a, b) =>
                new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
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
            <div className="mt-16">
                <EventCardCompleted events={completedEvents} />
            </div>
        </div>
    );
}
