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
        <div className="">
            <EventCardUpcoming events={events}/>
            <EventCardCompleted events={events}/>

            {/* button */}
            <div className="mt-4 flex items-center justify-center">
                <Link href="/" className="block w-max">
                    <Button className="border-[#E50D0D] text-[#E50D0D] hover:bg-[#E50D0D] hover:text-white px-10 py-2">
                        See all Events
                    </Button>
                </Link>
            </div>
        </div>
    );
}
