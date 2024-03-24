'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchEventBySlug } from "@/services/api/event";
import Button from "@/components/Button";
import Image from "next/image";
import Events from "@/models/event";

const EventDetailsPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
   const router = useRouter();
   const { slug } = params;
   const [event, setEvent] = useState<Events>();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const eventData = await fetchEventBySlug(slug);
            setEvent(eventData);
            setLoading(false);
         } catch (error) {
            console.error("Error fetching event data:", error);
            router.push("/404");
         }
      };

      if (slug) {
         fetchData().then(r => r);
      }
   }, [slug, router]);

   const handleRegister = () => {
      //TODO: Implement registration logic
   };

   const handleBack = () => {
      router.push("/events");
   };

   if (!event) {
      return <div>Loading...</div>;
   }

   return (
      <div className="container mx-auto px-4 py-8">
         {/* Back Button */}
         <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between mt-12">
            {/* Thumbnail */}
            <div className="w-full lg:w-1/3">
               <Image
                  src={event.thumbnail}
                  className="h-auto w-full rounded-lg"
                  alt={`${event.title}'s poster`}
                  width={384}
                  height={256}
               />
            </div>
            {/* Event Details */}
            <div className="w-full lg:w-2/3 lg:ml-8 mt-4 lg:mt-0">
               <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
               <p className="mb-4">{event.description}</p>
               <p className="mb-4">{`${event.start_date.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
               })} - ${event.end_date.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
               })}`}</p>
               <p className="mb-4">Status: {event.status}</p>
               <p className="mb-4">Organization: {event.organization}</p>
               {/* Register Button */}
               <Button onClick={handleRegister} className="mr-4">Register</Button>
            </div>
         </div>
      </div>
   );
};

export default EventDetailsPage;
