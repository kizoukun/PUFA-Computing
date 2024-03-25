"use client"
import React, { useEffect, useState } from "react";
import { fetchUserEvents } from "@/services/api/user"; // Menggunakan fungsi fetchUserEvents yang baru ditambahkan
import Event from "@/models/event";
import EventStatusDashboard from "@/components/event/EventStatusDashboard";

export default function RegisteredEvents() {
   const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);

   useEffect(() => {
      const userId = localStorage.getItem("userId");
      if (userId) {
         fetchUserEvents(userId).then((events) => {
            setRegisteredEvents(events);
         }).catch((error) => {
            console.error("Error fetching user registered events", error);
         });
      }
   }, []);

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
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
               {registeredEvents.map((event) => (
                  <tr key={event.id}>
                     <td className="whitespace-nowrap px-4 py-3.5 text-center">
                        {event.title}
                     </td>
                     <td className="whitespace-nowrap py-3.5 text-center">
                        {event.organization}
                     </td>
                     <td className="whitespace-nowrap py-3.5 text-center">
                        <EventStatusDashboard status={event.status} />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
