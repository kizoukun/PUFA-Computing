import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Event } from "@/lib/types";

type EventCardMobileProps = {
    events: Event[];
};

export default function EventCardMobile({ events }: EventCardMobileProps) {
    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + "...";
    };
    const calculateDaysLeft = (endDate: Date) => {
        const today = new Date();
        const differenceInTime = endDate.getTime() - today.getTime();
        return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    };
    return (
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {events.map((event) => (
                <Link key={event.id} href={`/events/${event.uniqueId}`}>
                    <div className="flex flex-col gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:flex-row md:gap-8">
                        <div className="relative">
                            <Image
                                src={event.thumbnail}
                                className="h-auto w-full rounded-t-[15px] md:rounded-l-[15px] md:rounded-t-none"
                                alt={`${event.title}'s poster`}
                                width={384}
                                height={256}
                            />

                            <span className="absolute -top-1 right-0 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                                {calculateDaysLeft(event.endDate)} days left
                            </span>
                        </div>
                        <div className="flex flex-col justify-between p-2 md:p-4">
                            <div>
                                <p className="text-lg font-bold">
                                    {event.title}
                                </p>
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
                            </div>
                            <p className="text-justify text-sm md:text-base">
                                {" "}
                                {truncateDescription(
                                    event.description,
                                    150
                                )}{" "}
                            </p>
                            <div className="flex justify-between pb-2 pt-4">
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
