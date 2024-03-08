import Image from "next/image";
import React from "react";
import Logo from "@/assets/anagatalogo.svg";
import CardWithImage from "@/components/CardWithImage";
import TimelineComponent from "@/components/cabinet/TimelineComponent";
import Link from "next/link";
import MobileViewPhilosophy from "@/components/cabinet/MobileViewPhilosophy";

export default function Page() {
   return (
      <div>
         {/* logo and tagline */}
         <section className="flex flex-col items-center bg-[#F2F2F2] p-[5rem] md:px-[10rem]">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
               <Image
                  alt="ANAGATA logo"
                  className="rounded-lg object-cover shadow-xl"
                  height="256"
                  src={Logo}
                  width="256"
               />
               <div className="flex flex-col space-y-6 border-l-4 border-[#1FA820] pl-8 leading-none text-[#353535]">
                  <h1 className="text-[3rem] font-[600]">ANAGATA CABINET</h1>
                  <h1 className="text-[2rem] font-[600]">
                     "Be Strong, One Determination"
                  </h1>
                  <h1 className="text-[1rem] font-[600]">
                     PUFA COMPUTING PERIOD 2023/2024
                  </h1>
               </div>
            </div>
         </section>

         {/* logo philosophy  */}
         <section className="flex flex-col items-center space-y-12 p-[5rem] md:px-[10rem]">
            <h1 className="text-[2rem] font-[600] text-[#353535]">
               LOGO PHILOSOPHY
            </h1>

            {/* mobile view  */}
            <MobileViewPhilosophy />

            <div className="hidden max-w-[62rem] flex-col items-center gap-16 md:flex">
               <div className="relative -left-10 flex gap-8">
                  <Image
                     alt="Letter A"
                     width={1920}
                     height={1080}
                     src="/logo/anagataLetterA.svg"
                     className="h-[150px] w-[150px] rounded-lg shadow-xl"
                  />

                  <h1 className="max-w-[10rem] self-center rounded-lg border-2 border-[#F6931A] px-6 py-4 text-[1.2rem] font-[600] text-[#376853]">
                     LETTER "A"
                  </h1>

                  <h1 className="max-w-[30rem] self-center text-[1.2rem] font-[600] text-[#376853] text-[]">
                     Our letter "A" that represents our cabinet name is
                     "ANAGATA".
                  </h1>
               </div>

               <div className="relative left-10 flex gap-8">
                  <Image
                     alt="Bridge & 25 Pillars"
                     width={1920}
                     height={1080}
                     src="/logo/anagataBridge.svg"
                     className="h-[150px] w-[150px] rounded-lg shadow-xl"
                  />

                  <h1 className="max-w-[10rem] self-center rounded-lg border-2 border-[#F6931A] px-6 py-2 text-[1.2rem] font-[600] text-[#376853]">
                     BRIDGES & 25 PILLARS
                  </h1>

                  <h1 className="max-w-[30rem] self-center text-[1.2rem] font-[600] text-[#376853]">
                     A bridge means PUFA Computing as an intermediary for
                     computing faculty to achieve a bright future. 25 Pillars
                     which means 25 people consisting of a combination of BoD,
                     HoD, and VoD.
                  </h1>
               </div>

               <div className="relative -left-10 flex gap-8">
                  <Image
                     alt="Sun"
                     width={1920}
                     height={1080}
                     src="/logo/anagataSun.svg"
                     className="h-[150px] w-[150px] rounded-lg shadow-xl"
                  />

                  <h1 className="max-w-[10rem] self-center rounded-lg border-2 border-[#F6931A] px-12 py-4 text-[1.2rem] font-[600] text-[#376853]">
                     SUN
                  </h1>

                  <h1 className="max-w-[30rem] self-center text-[1.2rem] font-[600] text-[#376853]">
                     The brilliant sun represents a bright future for the
                     computing faculty, with 9 sides of sunshine representing
                     the 9 divisions of PUFA Computing.
                  </h1>
               </div>
            </div>
         </section>

         {/* VISIONS & MISSIONS  */}
         <section className="flex select-none flex-col items-center space-y-12 bg-[#F2F2F2] px-[5rem] py-[5rem] md:px-[10rem]">
            <div>
               <h1 className="text-[2rem] font-[600] text-[#353535]">
                  VISION & MISSION
               </h1>
            </div>
            <div>
               <p className="max-w-[50rem] text-center font-[600] text-[#376853]">
                  PUFA Computing as a bridge for students in the Computing
                  Faculty, and makes PUFA Computing more responsive,
                  progressive, professional, and inspiring to become a strong
                  bridge as a forum for students in the computing faculty to
                  improve soft skills, hard skills, connecting computing minds
                  to empowering future innovators, and as an aspirational forum
                  for the welfare of faculty, lecturers, and students.
               </p>
            </div>
            <div className="grid max-w-[20rem] grid-cols-1 gap-10 md:max-w-[60rem] md:grid-cols-3">
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
         <section className="flex flex-col items-center bg-white">
            <h1 className="flex justify-center p-8 text-2xl font-[600] text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
               DIVISION
            </h1>

            <div className="md:hidden">
               {" "}
               <div className="grid max-w-[20rem] grid-cols-1 gap-8 md:grid-cols-4">
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
                  <div className="flex flex-col gap-14 text-right">
                     <Link
                        href="anagata/board-of-director"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Board of Director
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="anagata/external-relation"
                        className="relative right-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              External Relations
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-green-200 to-green-600"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           This division organize activities or events related
                           <br />
                           to parties outside the campus.
                        </p>
                     </Link>

                     <Link
                        href="anagata/internal-relation"
                        className="relative right-20 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Internal Relations
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           This division has the main task of strengthening the
                           <br />
                           relationship between students and students, students
                           and <br /> lecturers, students and alumni and PUMA -
                           PUFA
                        </p>
                     </Link>

                     <Link
                        href="anagata/art-and-sport"
                        className="relative right-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Art and Sport
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-green-200 to-green-600"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           Division that focuses on developing interest and
                           burning <br /> the arts and sports in the computing
                           sphere.
                        </p>
                     </Link>

                     <Link
                        href="anagata/communication-and-multimedia"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Communication
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           Division that handles PUFA Computing social media
                           such <br /> as Instagram, LinkedIn, LINE OA, and
                           youtube.
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

                  <div className="flex flex-col gap-14 text-left">
                     <Link
                        href="anagata/research-and-technology"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Research and Technology
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           division in charge of developing creative ideas and
                           sharing <br /> knowledge and sharing knowledge in the
                           field of technology.
                        </p>
                     </Link>

                     <Link
                        href="anagata/student-development-and-competition"
                        className="relative left-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Student Development and Competition
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-green-200 to-green-600"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           is a representative of the highest division
                           consisting of <br />
                           Chairperson, Vice Chairperson, Secretary and
                           Treasurer.
                        </p>
                     </Link>

                     <Link
                        href="anagata/student-welfare-advocacy"
                        className="relative left-20 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Student Welfare Advocacy
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           Responsible for accommodating aspirations and <br />
                           suggestions, as well as assisting and defending
                           problems <br /> experienced by Computizens.
                        </p>
                     </Link>
                     <Link
                        href="anagata/entrepreneur"
                        className="relative left-10 rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Entrepreneurship
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-green-200 to-green-600"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           this division aims to develop computizens interests
                           and <br />
                           talents in entrepreneurship and business.
                        </p>
                     </Link>
                     <Link
                        href="anagata/communication-and-multimedia"
                        className="rounded-xl p-2 duration-300 hover:scale-110 hover:shadow-xl"
                     >
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                           <h1 className="text-[1.2rem] font-[600] text-[#353535]">
                              Multimedia
                           </h1>
                           <div className="h-[20px] w-[20px] rounded-full bg-gradient-to-br from-orange-200 to-orange-400"></div>
                        </div>
                        <p className="text-[0.9rem] font-light text-[#6B7280]">
                           Responsible to in charge of creating and editing{" "}
                           <br />
                           templates content to be posted on social media PUFA{" "}
                           <br />
                           Computing.
                        </p>
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-[#F2F2F2]">
            <h1 className="flex justify-center p-8 text-2xl font-[600] text-[#353535] md:p-20 md:text-4xl lg:text-5xl">
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
                                 <h4 className="mb-3 text-lg font-[600] text-[#353535] md:text-2xl">
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
                                 <h4 className="mb-3 text-lg font-[600] text-[#353535] md:text-2xl">
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
                                 <h4 className="mb-3 text-lg font-[600] text-[#353535] md:text-2xl">
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
                                    <li className="mb-3 text-left  text-lg font-[600] text-[#353535] md:text-2xl">
                                       Social Project
                                    </li>
                                    <li className="mb-3 text-left  text-lg font-[600] text-[#353535] md:text-2xl">
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
