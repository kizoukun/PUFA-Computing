"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchEventBySlug } from "@/services/api/event";
import Button from "@/components/Button";
import Image from "next/image";
import Events from "@/models/event";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Seperator from "@/components/Seperator";

const description = (description: string) => {
   const lines = description.split("\n");
   return lines.map((line, index) => (
      <React.Fragment key={index}>
         {line}
         {index !== lines.length - 1 && <br />}
      </React.Fragment>
   ));
};

const EventDetailsPage: React.FC<{ params: { slug: string } }> = ({
   params,
}) => {
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
         fetchData().then((r) => r);
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
      <div>
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#FF6F22] pl-5 ">
               <h1 className="font-extrabold text-[2rem] text-black">
                  <div className="flex items-center font-[700] text-[#353535]">
                     <Link href="../events" className="hover:underline">
                        Computing Events
                     </Link>
                     <IoIosArrowForward className="ml-2" />
                     {event.organization}
                  </div>
               </h1>
               <p className="text-[0.8rem] font-[400]">
                  The latest news about research, technology, achievements, and
                  campus life.
               </p>
            </div>
         </section>

         <div className="mx-auto grid max-w-7xl items-start gap-6 py-6 md:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
               <Image
                  alt={`${event.title}'s poster`}
                  className="w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                  height={1080}
                  width={1920}
                  src={event.thumbnail}
               />
            </div>

            {/* card details event  */}
            <div className="rounded-lg border border-[#CBCBCB] text-[#353535] max-h-4xl">
               <h1 className="px-5 py-2 text-[1.5rem] font-[600]">
                  {event.title}
               </h1>
               <Seperator className="border-[#CBCBCB]" />
               {/*Overflow for scroll if long*/}
               <div className="overflow-y-auto max-h-[39rem] px-5 py-2">
                  <p className="px-5 py-2 text-[0.938rem] font-[400]">
                     {description(event.description)}
                  </p>
               </div>

               <div className="flex items-center justify-center pb-5 pt-3 ">
                  <Button className="w-5/6 border-[#353535] py-2 text-[#353535] hover:bg-[#353535] hover:text-white">
                     Register Now !
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EventDetailsPage;
