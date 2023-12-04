import EventCardPage from "@/components/event/EventCardPage";

// import componentnya
import LogoOrganizationEventPage from "@/components/event/LogoOrganizationEventPage";
import PosterCardEventPage from "@/components/event/PosterCardEventPage";

export default function EventsPage() {
   return (
      <div>
         {/* // title */}
         <section className="p-10 px-[10rem] bg-[#F2F2F2]">
            <div className="flex flex-col border-l-4 border-[#FF6F22] pl-5">
               <h1 className="text-[2rem] font-black">Computing Events</h1>
               <p className="text-[0.8rem]">
                  The latest news about research, technology, achievements, and
                  campus life.
               </p>
            </div>
         </section>

         {/* event highlights */}
         <section className="px-[10rem] py-[3rem]">
            <h1 className="font-bold text-[1.2rem] mb-5">Highlights</h1>

            {/* card section */}
            <div className="h-auto w-auto items-center justify-between mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-y-12">
               {/* card */}

               {/* isi dari komponennya  */}
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  details="asdasdads"
                  status="Upcoming"
                  major="PUMA IT"
                  image="../events/compsphere_2023.png"
               />
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  details="asdasdads"
                  status="Upcoming"
                  major="PUMA IT"
                  image="../events/compsphere_2023.png"
               />
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  details="asdasdads"
                  status="Upcoming"
                  major="PUMA IT"
                  image="../events/compsphere_2023.png"
               />
               <EventCardPage
                  title="Compsphere 2023"
                  participant="Public"
                  details="asdasdads"
                  status="Upcoming"
                  major="PUMA IT"
                  image="../events/compsphere_2023.png"
               />
            </div>
         </section>

         {/* event categories  */}
         <section className=" py-5 mt-[5rem]">
            <h1 className="font-bold text-[1.2rem] mb-10 px-[10rem]">
               Event Categories
            </h1>
            <div className="border-t-2 border-b-2 border-gray-200 h-[16rem] flex items-center justify-between px-[10rem]">
               <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center gap-[8rem]">
                     {/* logo  */}
                     <LogoOrganizationEventPage
                        image="../logo/PUFA_Computing.png"
                        title="PUFA Computing"
                     />

                     <LogoOrganizationEventPage
                        image="../logo/PUMA_IT.png"
                        title="PUMA Informatics"
                     />
                     <LogoOrganizationEventPage
                        image="../logo/PUMA_IS.png"
                        title="PUMA Information System"
                     />
                     <LogoOrganizationEventPage
                        image="../logo/PUMA_VCD.png"
                        title="PUMA Visual Design Communication"
                     />
                     <LogoOrganizationEventPage
                        image="../logo/PUMA_ID.png"
                        title="PUMA Interior Design"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* all events part */}
         <section className="px-[10rem] py-[5rem]">
            <h1 className="text-[1.2rem] font-bold mb-[5rem]">All Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/compsphere_2023.png"
                  alt="logo"
               />
               <PosterCardEventPage
                  link="/news"
                  image="../events/sospro_2023.png"
                  alt="logo"
               />
            </div>
         </section>

         {/* pagination thing */}
         <section className="px-[10rem] py-[4rem]">
            <div className="flex justify-between border-t-2 border-gray-100 py-2 text-gray-400">
               <div>
                  <button>Previous</button>
               </div>
               <div className="flex gap-8">
                  <button className="border-t-2 border-[#3C99DC] text-[#3C99DC] w-[1.5rem]">
                     1
                  </button>
                  <button>2</button>
                  <button>3</button>
                  <button>...</button>
                  <button>8</button>
                  <button>9</button>
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
