"use client";
import React,{ useState } from 'react';
import { Event } from "@/services/api/event";
import { AxiosError } from 'axios';
import Link from "next/link";
import Card from '../Card';

export default function EventCard() {
    
    const[id, setId] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDesctiption] = useState("");
    const[date, setDate] = useState("");

  return (
    <div className="p-0.5 rounded-md bg-[#E50D0D]">
         <div className="rounded-md bg-white pt-20 sm:p-6">
            <div className="text-[#353535]">
               <p className="mt-0.5 text-2xl text-justify font-bold border-b-8 border-[#E50D0D] pb-1">
                  {EventCard.map((Card)=>
                     <EventCard
                        title ={Card.title}
                        description = {Card.description}
                        date = {Card.date}
                     />
                  )}
               </p>
               {/* content */}
               <div className="mt-4 text-md font-extralight text-justify">
                    {description}
               </div>
               <div className="mt-4 flex flex-wrap gap-1 justify-between">
                  {/* status */}
                  <div className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-xs text-[#E50D0D] border border-[#E50D0D]">
                     {status}
                  </div>
                  <div className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-xs text-[#E50D0D] border border-[#E50D0D]">
                     {date}
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}
