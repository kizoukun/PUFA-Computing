"use client";
import EventStatusDashboard from "@/components/event/EventStatusDashboard";
import React, { useEffect, useState } from "react";

type RegisteredEventsProps = {
    events?: {
        title: string;
        organization: string;
        status: string;
    }[];
};

export default function RegisteredEvents({ events }: RegisteredEventsProps) {
    return (
        <div className="overflow-hidden rounded-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg:transparent">
                    <tr className="text-center font-[500] text-[#353535]">
                        <th scope="col" className="px-4 py-3.5 ">
                            Events Name
                        </th>

                        <th scope="col" className="px-12 py-3.5">
                            Organization
                        </th>

                        <th scope="col" className="py-3.5">
                            Status
                        </th>

                        <th scope="col" className="py-3.5">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {events &&
                        events.length > 0 &&
                        events.map((event) => (
                            <tr key={event.title}>
                                <td className="whitespace-nowrap px-4 py-3.5 text-center">
                                    {event.title}
                                </td>
                                <td className="whitespace-nowrap py-3.5 text-center">
                                    {event.organization}
                                </td>
                                <td className="whitespace-nowrap py-3.5 text-center">
                                    <EventStatusDashboard
                                        status={event.status ?? ""}
                                    />
                                </td>
                                <td className="whitespace-nowrap py-3.5 text-center">
                                    <button
                                        className="cursor-not-allowed font-normal text-[#02ABF3] disabled:text-gray-500"
                                        disabled
                                        title="Coming Soon"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
