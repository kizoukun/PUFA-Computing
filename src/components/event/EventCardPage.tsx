import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Event } from "@/lib/types";

interface EventCardPageProps {
    events: Event[];
}

export default function EventCardPage({ events }: EventCardPageProps) {
    const calculateDaysLeft = (endDate: Date) => {
        const today = new Date();
        const differenceInTime = endDate.getTime() - today.getTime();
        return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    };

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + "...";
    };

    if (events.length === 0) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-bold text-gray-700">
                        No Upcoming Events
                    </h1>
                    <p className="text-xl text-gray-500">
                        Check back later for updates.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {events.map((event) => (
                <Link key={event.id} href={`/events/${event.uniqueId}`}>
                    <div className="flex cursor-pointer gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:gap-8">
                        <div className="relative h-[16rem] w-[40rem]">
                            <Image
                                src={event.thumbnail}
                                className="h-full w-full scale-110 rounded-[15px]"
                                alt={`${event.title}'s poster`}
                                layout="fixed"
                                width={2800}
                                height={1080}
                            />
                        </div>
                        <div className="flex flex-col justify-between space-y-4 p-2 md:p-4">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-bold">
                                    {event.title}
                                </p>
                                <span className="rounded-xl border border-purple-700 bg-purple-700 px-2 text-white">
                                    {calculateDaysLeft(event.endDate)} days left
                                </span>
                            </div>
                            <p className="font-[600] text-[#353535]">
                                {`${event.startDate.toLocaleDateString(
                                    "id-ID",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )} - ${event.endDate.toLocaleDateString(
                                    "id-ID",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}`}
                            </p>
                            <p className="text-justify text-sm md:text-base">
                                {truncateDescription(event.description, 150)}
                            </p>
                            <div className="flex justify-between">
                                <p className="text-[16px] font-bold ">
                                    {event.organization.name}
                                </p>
                                <div>
                                    <button className="rounded-[10px] border border-[#E50D0D] px-2">
                                        {/* {event.status} */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
