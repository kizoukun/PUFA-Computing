import React from "react";
import RegisteredEvents from "./_components/RegisteredEvents";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect("/auth/signin");
    }
    const user = session?.user;
    const userParticipation = await db.users.findFirst({
        where: {
            EventParticipant: {
                some: {
                    userId: user.id,
                },
            },
        },
        select: {
            Event: {
                select: {
                    title: true,
                    startDate: true,
                    endDate: true,
                    organization: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });

    const userEvents = userParticipation?.Event.map((event) => {
        const startTime = event.startDate.getTime();
        const endTime = event.endDate.getTime();
        return {
            title: event.title,
            organization: event.organization.name,
            status:
                startTime > Date.now()
                    ? "Upcoming"
                    : endTime < Date.now()
                      ? "Completed"
                      : "Ongoing",
        };
    });
    return (
        <div className="container mx-auto px-4 ">
            <div className="mt-6 flex flex-col bg-white">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        {/*Title List of event registered*/}
                        <h1 className="text-center text-2xl font-semibold text-[#353535]">
                            List of Event Registered
                        </h1>
                        <RegisteredEvents events={userEvents} />
                    </div>
                </div>
            </div>
        </div>
    );
}
