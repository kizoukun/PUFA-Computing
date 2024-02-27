import Image from "next/image";
import React from "react";
import Logo from "@/assets/anagatalogo.svg";
import CardWithImage from "@/components/CardWithImage";
import TimelineComponent from "@/components/TimelineComponent";
import Link from "next/link";

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
         <section className="flex flex-col items-center justify-center bg-white px-20 pb-12">
            <h1 className="flex justify-center p-8 text-2xl font-bold text-[#353535] md:p-14 md:text-4xl lg:text-5xl">
               LOGO PHILOSOPHY
            </h1>

            <div className="block md:hidden">
               <div className="grid grid-cols-1">
               <CardWithImage
                  image="/logo/letter_a.svg"
                  title="Letter A"
                  details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
               />
               <CardWithImage
                  image="/logo/bridge.svg"
                  title="EMBRACE"
                  details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
               />
               <CardWithImage
                  image="/logo/sun.svg"
                  title="EMBRACE"
                  details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
               />
               </div>
            </div>

            <div className="hidden max-w-5xl flex-col gap-16 md:block">
               <div className="relative left-[-2rem] flex gap-4">
                  <Image
                     alt="Letter A"
                     width={1920}
                     height={1080}
                     src="/logo/letter_a.svg"
                     className="h-[150px] w-[150px] rounded-lg"
                  />

                  <h1 className="self-center rounded-lg border-2 border-orange-400 px-4 py-2 text-[1.2rem] font-bold text-green-600">
                     LETTER "A"
                  </h1>

                  <h1 className="self-center text-[1.2rem] font-bold text-green-600">
                     Our letter "A" that represents our cabinet name is
                     "ANAGATA".
                  </h1>
               </div>

               <div className="relative left-[2rem] flex gap-4">
                  <Image
                     alt="Bridge & 25 Pillars"
                     width={1920}
                     height={1080}
                     src="/logo/bridge.svg"
                     className="h-[150px] w-[150px] rounded-lg"
                  />

                  <h1 className="self-center rounded-lg border-2 border-orange-400 px-10 py-2 text-[1.2rem] font-bold text-green-600">
                     BRIDGES & 25 PILLARS
                  </h1>

                  <h1 className="self-center text-[1.2rem] font-bold text-green-600">
                     A bridge means PUFA Computing as an intermediary for
                     computing faculty to achieve a bright future. 25 Pillars
                     which means 25 people consisting of a combination of BoD,
                     HoD, and VoD.
                  </h1>
               </div>

               <div className="relative left-[-2rem] flex gap-4">
                  <Image
                     alt="Sun"
                     width={1920}
                     height={1080}
                     src="/logo/sun.svg"
                     className="h-[150px] w-[150px] rounded-lg"
                  />

                  <h1 className="self-center rounded-lg border-2 border-orange-400 px-4 py-2 text-[1.2rem] font-bold text-green-600">
                     SUN
                  </h1>

                  <h1 className="self-center text-[1.2rem] font-bold text-green-600">
                     The brilliant sun represents a bright future for the
                     computing faculty, with 9 sides of sunshine representing
                     the 9 divisions of PUFA Computing.
                  </h1>
               </div>
            </div>
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
               <CardWithImage
                  image="/icon-pufa/explore.svg"
                  title="EXPLORE"
                  details="Encouraging the exploration and development of innovation in every change in PUFA Computing."
               />
               <CardWithImage
                  image="/icon-pufa/enhance.svg"
                  title="ENHANCE"
                  details="Providing the best forum for aspirations, connections, information, and activities in the academic and non-academic fields by prioritizing the interests of the faculty of computing."
               />
               <CardWithImage
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

            <div className="md:hidden">
               {" "}
               <div className="grid grid-cols-2 md:grid-cols-4">
                  <CardWithImage
                     image="/icon-pufa/embrace.svg"
                     title="EMBRACE"
                     details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
                  />
                  <CardWithImage
                     image="/icon-pufa/embrace.svg"
                     title="EMBRACE"
                     details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
                  />
                  <CardWithImage
                     image="/icon-pufa/embrace.svg"
                     title="EMBRACE"
                     details="To strengthen relationships with faculty, PUFA Computing members, Computizens, PUSB, PUSC, all PUMA, Academic Communities, Alumni, and CnC."
                  />
               </div>
            </div>
            <div className="hidden md:block">
               <div className="flex items-center justify-center gap-12 pb-20">
                  <div className="flex flex-col gap-14">
                     <Link
                        href="/anagata/bod"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="relative right-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="relative right-20 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="relative right-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>
                  </div>

                  <Image
                     src="/logo/PUFA_Computing.png"
                     alt="Logo PUFA Computing"
                     width={1920}
                     height={1080}
                     className="h-[250px] w-[250px] rounded-3xl duration-300 hover:scale-110 hover:shadow-xl"
                  />

                  <div className="flex flex-col gap-14">
                     <Link
                        href="anagata/bod"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="relative left-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="/anagata/bod"
                        className="relative left-20 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>
                     <Link
                        href="/anagata/bod"
                        className="relative left-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>
                     <Link
                        href="/anagata/bod"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="">BOARD OF DIRECTOR</h1>
                           <div className="h-[25px] w-[25px] rounded-full bg-orange-400"></div>
                        </div>
                        <p className="">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-[#F2F2F2]">
            <h1 className="flex justify-center p-8 text-2xl font-bold text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
               TIMELINE
            </h1>
            <div className="bg-black text-white">
               <div className="container mx-auto  flex flex-col items-start  md:flex-row">
                  <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
                     <p className="tracking-loose ml-2 uppercase text-yellow-300">
                        Event Timeline
                     </p>
                     <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
                        Working Process of Fest
                     </p>
                     <p className="mb-4 text-sm text-gray-50 md:text-base">
                        Here’s your guide to the tech fest 2021 process. Go
                        through all the steps to know the exact process of the
                        fest.
                     </p>
                     <Link
                        href="/events"
                        className="mr-auto rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-white hover:shadow-lg"
                     >
                        Explore Now
                     </Link>
                  </div>
                  <div className="sticky ml-0 md:ml-12 lg:w-2/3">
                     <div className="container mx-auto h-full w-full">
                        <div className="wrap relative h-full overflow-hidden p-10">
                           <div
                              className="border-2-2 border-yellow-555 absolute h-full border"
                              style={{
                                 right: "50%",
                                 border: "2px solid #FFC100",
                                 borderRadius: "1%",
                              }}
                           ></div>

                           {/* Left Border */}
                           <div
                              className="border-2-2 border-yellow-555 absolute h-full border"
                              style={{
                                 left: "50%",
                                 border: "2px solid #FFC100",
                                 borderRadius: "1%",
                              }}
                           ></div>
                           <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                              <div className="order-1 w-5/12"></div>
                              <div className="order-1 w-5/12 px-1 py-4 text-right">
                                 <p className="mb-3 text-base text-yellow-300">
                                    November 2023
                                 </p>
                                 <h4 className="mb-3 text-lg font-bold md:text-2xl">
                                    Compbraints
                                 </h4>
                                 <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                    Pick your favourite event(s) and register in
                                    that event by filling the form corresponding
                                    to that event. Its that easy :
                                 </p>
                              </div>
                           </div>
                           <div className="right-timeline mb-8 flex w-full items-center justify-between">
                              <div className="order-1 w-5/12"></div>
                              <div className="order-1  w-5/12 px-1 py-4 text-left">
                                 <p className="mb-3 text-base text-yellow-300">
                                    December 2023
                                 </p>
                                 <h4 className="mb-3 text-lg font-bold md:text-2xl">
                                    Compshadow I Welcoming
                                 </h4>
                                 <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                    Participate online. The links for your
                                    registered events will be sent to you via
                                    email and whatsapp groups. Use those links
                                    and show your talent.
                                 </p>
                              </div>
                           </div>
                           <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                              <div className="order-1 w-5/12"></div>
                              <div className="order-1 w-5/12 px-1 py-4 text-right">
                                 <p className="mb-3 text-base text-yellow-300">
                                    {" "}
                                    February 2024
                                 </p>
                                 <h4 className="mb-3 text-lg font-bold md:text-2xl">
                                    CSGO
                                 </h4>
                                 <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                    The ultimate genius will be revealed by our
                                    judging panel on 10th May, 2021 and the
                                    resukts will be announced on the whatsapp
                                    groups and will be mailed to you.
                                 </p>
                              </div>
                           </div>

                           <div className="right-timeline mb-8 flex w-full items-center justify-between">
                              <div className="order-1 w-5/12"></div>

                              <div className="order-1  w-5/12 px-1 py-4">
                                 <p className="mb-3 text-base text-yellow-300">
                                    March 2024
                                 </p>
                                 <ul className="list-disc">
                                    <li className="mb-3 text-left  text-lg font-bold md:text-2xl">
                                       Social Project
                                    </li>
                                    <li className="mb-3 text-left  text-lg font-bold md:text-2xl">
                                       Compstud
                                    </li>
                                 </ul>
                                 <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                                    The winners will be contacted by our team
                                    for their addresses and the winning goodies
                                    will be sent at their addresses.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <img
                           className="mx-auto -mt-36 md:-mt-36"
                           src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
