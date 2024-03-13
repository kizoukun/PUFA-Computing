import EventCardPage from "@/components/event/EventCardPage";
import { fetchEvents } from "@/services/api/event";
import LogoOrganizationEventPage from "@/components/event/LogoOrganizationEventPage";
import PosterCardEventPage from "@/components/event/PosterCardEventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Events",
};
export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function EventsPage() {
   const events = await fetchEvents();

	if(!events) return <div>Failed to fetch data...</div>

   const upcomingEvents = events.filter(event => event.status == "Upcoming").slice(0, 2);
   const completedEvents = events.filter(event => event.status == "Completed").slice(0, 3);

   
   return (
      <div>
         {/* // title */}
         <section className="flex items-center bg-[#F2F2F2] px-[5rem] py-[2rem] md:px-[10rem]">
            <div className="border-l-4 border-[#E50D0D] pl-8">
               <h1 className="text-[2rem] font-[600]">Computing Events</h1>
               <h1 className="text-[0.8rem]">
                  Discover the latest updates on events in our faculty.
               </h1>
            </div>
         </section>

         {/* event highlights */}
         <section className="mx-auto max-w-7xl p-10">
            <h1 className="mb-5 text-[1.2rem] font-bold">Highlights</h1>

            {/* card section */}
            <EventCardPage events={upcomingEvents} />
         </section>

         <section className="mt-[5rem]">
            <h1 className="mx-auto max-w-7xl p-10 text-[1.2rem] font-bold">
               Event Categories
            </h1>
            <hr className="border-t-2 border-gray-200" />
            <div className="mx-auto max-w-7xl p-10">
               <div className="grid grid-cols-2	 gap-[8rem] md:grid-cols-3 lg:grid-cols-5">
                  <LogoOrganizationEventPage
                     image="../logo/PUFA_Computing.png"
                     title="PUFA Computing"
                     link="events/pufa-computing"
                  />

                  <LogoOrganizationEventPage
                     image="../logo/PUMA_IT.png"
                     title="PUMA Informatics"
                     link="events/puma-it"
                  />
                  <LogoOrganizationEventPage
                     image="../logo/PUMA_IS.png"
                     title="PUMA Information System"
                     link="events/puma-is"
                  />
                  <LogoOrganizationEventPage
                     image="../logo/PUMA_VCD.png"
                     title="PUMA Visual Design Communication"
                     link="events/puma-vcd"
                  />
                  <LogoOrganizationEventPage
                     image="../logo/PUMA_ID.png"
                     title="PUMA Interior Design"
                     link="events/puma-id"
                  />
               </div>
            </div>
            <hr className="border-t-2 border-gray-200" />
         </section>

         <section className="mx-auto max-w-7xl px-10 py-[5rem]">
            <h1 className="mb-[3rem] text-[1.2rem] font-bold">All Events</h1>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="/events/sospro_2023.png"
                  alt="logo"
               />
            </div>
         </section>

         <section className="mx-auto max-w-7xl">
            <div className="flex justify-between border-t-2 border-gray-100 py-2 text-gray-400">
               <div>
                  <button>Previous</button>
               </div>
               <div className="flex gap-8">
                  <button className="w-[1.5rem] border-t-2 border-[#3C99DC] text-[#3C99DC]">
                     1
                  </button>
                  <button>2</button>
                  <button>...</button>
                  <button>10</button>
               </div>
               <div>
                  <button>Next</button>
               </div>
            </div>
         </section>
      </div>
   );
}
