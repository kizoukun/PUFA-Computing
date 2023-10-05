"use client";
import React, { useEffect, useState } from 'react';
import { fetchEvents } from '@/services/api/event';
import { AxiosError } from 'axios';
import Link from 'next/link';
import Event from '@/models/event';
import Card from "@/components/Card";
import Button from "@/components/Button";
import EventCardUpcoming from "@/components/event/EventCardUpcoming";
import EventCardCompleted from "@/components/event/EventCardCompleted";

export default function EventSection() {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error: any) {
                setError(error);
            }
        };

        fetchData().then(r => r);
    }, []);

    return (
        <section
            id="event"
            className="max-w-8xl space-y-8 mx-auto p-5 my-32 text-center"
        >
            <h2 className="text-2xl font-bold">
                <span className="border-l-8 border-l-[#E50D0D] mr-4"></span>
                Computing Events
            </h2>
            <h3 className="">
                The latest news about research, technology, achievements, and
                campus life
            </h3>
            <div className="">
                <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
                    {/* Limit Event Upcoming just 2 */}
                    <EventCardUpcoming events={events}/>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {/* Limit Event Completed just 3 */}
                    <EventCardCompleted events={events}/>
                </div>
                {/* button */}
                <div className="mt-4 flex items-center justify-center">
                    <Link href="/" className="block w-max">
                        <Button className="border-[#E50D0D] text-[#E50D0D] hover:bg-[#E50D0D] hover:text-white px-10 py-2">
                            See all Events
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
