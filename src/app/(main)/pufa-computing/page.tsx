import Image from "next/image";
import React from "react";
import Logo from "@/assets/anagatalogo.svg";
import VisionAndMissionCard from "@/components/VisionAndMissionCard";

export default function Page() {
   return (
      <div>
         {/* logo and tagline */}
         <section className="bg-[#F2F2F2]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ">
               <div className="mb-12 flex flex-col items-center justify-center text-center lg:flex-row">
                  {/* logo  */}
                  <Image
                     alt="ANAGATA logo"
                     className="object-cover lg:mr-8"
                     height="256"
                     src={Logo}
                     width="256"
                  />
                  {/* tagline  */}
                  <div className="mb-8 lg:mb-0 lg:border-l-4 lg:border-[#1FA820] lg:pl-5 lg:text-left lg:text-[#353535]">
                     <p className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                        ANAGATA CABINET
                     </p>
                     <p className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                        "BE STRONG ONE DETERMINATION"
                     </p>
                     <p className="text-lg font-semibold lg:text-xl xl:text-2xl">
                        PUFA COMPUTING PERIOD 2023/2024
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* logo philosophy  */}
         <section className="bg-white">
            <h1 className="flex justify-center p-8 text-2xl font-bold text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
               LOGO PHILOSOPHY
            </h1>
         </section>

         {/* VISIONS & MISSIONS  */}
         <section className="bg-[#F2F2F2]">
            <h1 className="flex justify-center p-8 text-2xl font-bold text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
               VISIONS & MISSIONS
            </h1>
            <p className="mx-auto px-10 text-justify text-base font-semibold text-[#376853] md:max-w-6xl md:p-0 md:text-center md:text-lg lg:text-xl ">
               PUFA Computing as a bridge for students in the Computing Faculty,
               and makes PUFA Computing more responsive, progressive,
               professional, and inspiring to become a strong bridge as a forum
               for students in the computing faculty to improve soft skills,
               hard skills, connecting computing minds to empowering future
               innovators, and as an aspirational forum for the welfare of
               faculty, lecturers, and students.
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 py-10 md:grid-cols-3">
               <VisionAndMissionCard
                  image="/icon-pufa/explore.svg"
                  title="EXPLORE"
                  details="Encouraging the exploration and development of innovation in every change in PUFA Computing."
               />
               <VisionAndMissionCard
                  image="/icon-pufa/enhance.svg"
                  title="ENHANCE"
                  details="Providing the best forum for aspirations, connections, information, and activities in the academic and non-academic fields by prioritizing the interests of the faculty of computing."
               />
               <VisionAndMissionCard
                  image="/icon-pufa/embrace.svg"
                  title="EMBRACE"
                  details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
               />
            </div>
         </section>

         {/* division  */}
         <section className="bg-white">
            <h1 className="flex justify-center p-8 text-2xl font-bold text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
               DIVISION
            </h1>
         </section>
      </div>
   );
}
