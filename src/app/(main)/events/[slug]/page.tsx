import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Seperator from "@/components/Seperator";
import RegisterButton from "./_components/RegisterButton";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Button from "@/components/Button";

const description = (description: string) => {
    const lines = description.split("\n");
    return lines.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
        </React.Fragment>
    ));
};

interface EventPageProps {
    params: { slug: string };
}

export default async function EventDetailsPage({ params }: EventPageProps) {
    if (!params.slug || params.slug.length < 1) {
        return redirect("/404");
    }
    const session = await getServerSession(authOptions);
    const user = session?.user;
    const event = await db.event.findUnique({
        where: {
            uniqueId: params.slug,
        },
        include: {
            organization: true,
        },
    });

    const userParticipation = await db.users.findFirst({
        where: {
            EventParticipant: {
                some: {
                    userId: user?.id,
                },
            },
        },
        select: {
            Event: {
                select: {
                    id: true,
                },
            },
        },
    });

    const isAlreadyRegistered =
        userParticipation?.Event.some((event) => event.id === event.id) ||
        false;

    if (!event) {
        return redirect("/404");
    }

    return (
        <div>
            <section className="bg-[#F2F2F2] p-10">
                <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#FF6F22] pl-5 ">
                    <h1 className="font-extrabold text-[2rem] text-black">
                        <div className="flex items-center font-[700] text-[#353535]">
                            <Link href="../events" className="hover:underline">
                                Computing Events
                            </Link>
                            <IoIosArrowForward className="ml-2" />
                            {event.organization.name}
                        </div>
                    </h1>
                    <p className="text-[0.8rem] font-[400]">
                        The latest news about research, technology,
                        achievements, and campus life.
                    </p>
                </div>
            </section>

            <div className="mx-auto grid max-w-7xl items-start gap-6 py-6 md:grid-cols-2 lg:gap-12">
                <div className="w-full px-2 md:w-auto">
                    <div className="w-full scale-100 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                        <Image
                            alt={`${event.title}'s poster`}
                            layout="responsive"
                            className="h-64 object-contain"
                            height={1080}
                            width={1920}
                            src={event.thumbnail}
                        />
                    </div>
                </div>

                {/* card details event  */}
                <div className="max-h-4xl w-full rounded-lg border border-[#CBCBCB] text-[#353535] md:w-auto">
                    <h1 className="px-5 py-2 text-[1.5rem] font-[600]">
                        {event.title}
                    </h1>
                    <Seperator className="border-[#CBCBCB]" />
                    {/*Overflow for scroll if long*/}
                    <div className="max-h-[39rem] overflow-y-auto px-5 py-2">
                        <p className="px-5 py-2 text-justify text-[0.938rem] font-[400]">
                            {description(event.description)}
                        </p>
                    </div>
                    <Seperator className="border-[#CBCBCB]" />
                    <div className="flex items-center justify-center pb-5 pt-3 ">
                        {user ? (
                            <RegisterButton
                                eventId={event.id}
                                eventTitle={event.title}
                                isAlreadyRegistered={isAlreadyRegistered}
                            />
                        ) : (
                            <Link href="/auth/signin">
                                <Button
                                    className="w-5/6 border-[#353535] py-2 text-[#353535] hover:bg-[#353535] hover:text-white"
                                    disabled={true}
                                >
                                    Sign In to Register
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
