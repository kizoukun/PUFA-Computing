"use client"
import React, { useEffect, useState } from 'react';
import { fetchEvents } from '@/services/api/event';
import Event from "@/models/event";

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await fetchEvents();
        console.log('Events Data:', eventsData); // Log events data
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to fetch events. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {events.map((event) => (
          <div key={event.id}>
            <h2 className='text-black'>{event.title}</h2>
            <p>{event.description}</p>
            {/* Add other elements you want to display */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
