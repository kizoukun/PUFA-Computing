import React from 'react';
import Link from 'next/link';
import Event from '@/models/event';

export default function EventCardUpcoming({ events }: { events: Event[] }) {
    const currentDate = new Date();
    const upcomingEvents = events
        .filter((event) => new Date(event.end_date) > currentDate)
        .sort((a, b) => new Date(a.end_date).getTime() - new Date(b.end_date).getTime()
        );

    console.log('Current Date', currentDate)
    console.log('Upcoming Event', upcomingEvents);
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
            {upcomingEvents.map((event) => (
                <div className="p-0.5 rounded-md bg-[#E50D0D]" key={event.id}>
                    <div className="rounded-md bg-white pt-20 sm:p-6">
                        <div className="text-[#353535]">
                            <p className="mt-0.5 text-2xl text-justify font-bold border-b-8 border-[#E50D0D] pb-1">
                                {event.title}
                            </p>
                            {/* content */}
                            <div className="mt-4 text-md font-extralight text-justify">
                                {event.description}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-1 justify-between">
                                {/* status */}
                                <div className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-xs text-[#E50D0D] border border-[#E50D0D]">
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
