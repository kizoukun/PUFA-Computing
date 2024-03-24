'use client';
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchEventBySlug } from "@/services/api/event";
import Event from "@/models/event";

const EventPage: React.FC = () => {
   const slug = useSearchParams().has("slug");
   console.log(slug);
   const [event, setEvent] = useState<Event | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const eventData = await fetchEventBySlug(slug);
            setEvent(eventData);
         } catch (error) {
            console.error("Error fetching event data:", error);
         }
      };

      if (slug) {
         fetchData().then(r => r);
      }
      console.log(slug);
   }, [slug]);

   if (!event) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         {/* Render event details here */}
         <h1>{event.title}</h1>
         <p>{event.description}</p>
      </div>
   );
};

export default EventPage;
