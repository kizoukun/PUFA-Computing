import EventCardPage from "@/components/event/EventCardPage";
// import componentnya
import PosterCardEventPage from "@/components/event/PosterCardEventPage";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
   title: "PUMA VCD Events",
};

export default async function EventsPage() {
   return (
      <div>
         {/* // title */}
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#FF6F22] pl-5 ">
               <h1 className="text-[2rem] font-extrabold text-black">
                  <div className="flex items-center">
                     <Link href="../events" className="hover:underline">
                        Computing Events
                     </Link>
                     <IoIosArrowForward className="ml-2" /> PUMA Visual Communication Design
                  </div>
               </h1>
               <p className="text-[0.8rem]">
                  The latest news about research, technology, achievements, and
                  campus life.
               </p>
            </div>
         </section>

         {/* event highlights */}
         <section className="mx-auto max-w-7xl p-10">
            <h1 className="mb-5 text-[1.2rem] font-bold">Upcoming</h1>

            {/* card section */}
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
               {/* card */}

               {/* isi dari komponennya  */}
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  status="Upcoming"
                  major="PUMA IT"
                  image="/events/compsphere_2023.png"
               >
                  Holla Everyone!! 🙌🏻 We are from PUMA COMPUTING 2023 are so
                  excited to announce that Social Project 2023 ..
               </EventCardPage>
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  status="Upcoming"
                  major="PUMA IT"
                  image="/events/compsphere_2023.png"
               >
                  Holla Everyone!! 🙌🏻 We are from PUMA COMPUTING 2023 are so
                  excited to announce that Social Project 2023 ..
               </EventCardPage>
            </div>
         </section>

         <section className="mx-auto max-w-7xl px-10 py-[5rem]">
            <h1 className="mb-[5rem] text-[1.2rem] font-bold">All Events</h1>
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
