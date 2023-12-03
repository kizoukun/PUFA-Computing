import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import Link from "next/link";
import Button from "@/components/Button";
import EventSection from "@/components/event/EventSection";
import Faq from "@/components/Faq";
import CompreciationCard from "@/components/CompreciationCard";
import NewsCard from "@/components/news/NewsCard";
import NewsCardBig from "@/components/news/NewsCardBig";
import StudyProgCard from "@/components/StudyProgCard";

export default async function Index() {
   return (
      <div className="min-h-screen">
         <div>
            <Image
               src={BGImage}
               alt="PUMA Photo"
               width="0"
               height="0"
               sizes="100vw"
               className="w-full h-auto"
            />
         </div>
         <section
            id="introduction"
            className="container mx-auto  -mt-24 sm:-mt-32 md:-mt-48 lg:-mt-64 xl:-mt-96"
         >
            <img
               className=" mx-auto"
               src="../fotoheader.png"
               alt="PUMA Photo"
            />
            <div className="px-8 md:px-24 space-y-2 text-justify">
               <p className="text-xl">
                  PUMA Computing is President University Major Association of
                  Computing. Members of PUMA Computing consist of students from
                  the IT (Information Technology) and IS (Information System)
                  majors.
               </p>
               <p className="text-xl">
                  PUMA Computing is President University Major Association of
                  Computing. Members of PUMA Computing consist of students from
                  the IT (Information Technology) and IS (Information System)
                  majors.
               </p>
               <Link href="#" className="block w-max">
                  <Button>See Details</Button>
               </Link>
            </div>
         </section>

         {/* programs */}
         <section
            id="programs"
            className="max-w-7xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#0C8CE9] mr-4"></span>
               Study Programs
            </h2>
            <h3 className="max-w-xl mx-auto ">
               The Faculty of Computing has four study programs that produce
               qualified student graduates in their fields.
            </h3>
            <div className="flex flex-col-2 gap-16">
               <StudyProgCard
                  title="Informatics"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
               />
               <StudyProgCard
                  title="Information System"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
               />
               <StudyProgCard
                  title="Visual Communication Design"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
               />
               <StudyProgCard
                  title="Interior Design"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
               />
            </div>
         </section>
         {/* end */}

         {/* cabinet */}
         <section
            id="cabinet"
            className="max-w-6xl mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#1FA820] mr-4"></span>
               CABINET 2023/2024
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-6 md:py-[6rem] gap-16 md:gap-5">
               {/* logo anagata */}
               <div className="p-1 rounded-xl aspect-square shadow-lg h-[20rem] mt-5 md:mt-0 md:col-span-2">
                  <img
                     className=" mx-auto"
                     src="../anagatalogo.jpeg"
                     alt="PUMA Photo"
                  />
               </div>
               {/* cabinet content */}
               <div className="p-0.5 md:px-10 rounded-xl bg-white  md:mt-0 mb-5 md:flex sm:p-6 border-[#1FA820] border-2 md:col-span-4 h-[20rem]">
                  <div className="text-[#353535] md:flex md:flex-col md:justify-center py-10 md:py-5 px-10">

                     <div className="flex gap-5 md:gap-5">
                        <p className="mt-0.5 text-2xl text-left font-bold">
                           ANAGATA CABINET
                        </p>
                        <div className="bg-[#1FA820] w-[13rem] h-[1.5px] self-center"></div>
                     </div>

                     {/* content */}
                     <div className="mt-10 text-xl font-bold text-justify">
                        <p className="mb-4">
                        “One Team, One Vision, One for Computing”
                        </p>
                        <p className="text-gray-700">
                           We are attempting to be a bridge for the Computing
                           Faculty in a more positive way by growing together
                           with us.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            {/* button kthx */}
            <button className="rounded-xl text-[#1FA820] border-2 border-[#1FA820] py-3 px-10 hover:bg-[#1FA820] hover:text-white transition ease-in-out duration-300">See Our Cabinet</button>
         </section>
         {/* end */}

         {/* event */}
         <section
            id="event"
            className="max-w-8xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#E50D0D] mr-4"></span>
               Computing Events
            </h2>
            <h3 className="">
               Discover the latest updates on events in  our faculty.
            </h3>
         </section>
         {/* end */}

         {/* news */}
         <section
            id="news"
            className="max-w-7xl max-h-xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#705100] mr-4"></span>
               Computing News
            </h2>
            <h3 className="">
               The latest news about research, technology, achievements, and
               campus life
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
               <NewsCardBig
                  image="../aot.jpg"
                  title="Attack On Titan"
                  description="AOT DEBEST"
                  time="10 november"
               />
               <div className="grid grid-cols-2 gap-8">
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
               </div>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
                     See all News
                  </Button>
               </Link>
            </div>
         </section>
         {/* end */}

         {/* compreciacion */}

         <section
            id="compreciacion"
            className="max-w-7xl max-h-xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#AF95FF] mr-4"></span>
               Compreciation
            </h2>
            <h3 className="">Appreciation to Computizen’s best projects.</h3>

            <div></div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#AF95FF] text-[#AF95FF] hover:bg-transparent hover:text-[#AF95FF] px-10 py-2">
                     See all items
                  </Button>
               </Link>
            </div>
         </section>
         {/* end */}

         {/* store */}
         <section
            id="store"
            className="max-w-7xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#BA704F] mr-4"></span>
               Computing Store
            </h2>
            <h3 className="">Special merchandise for all Computizens</h3>


            <div className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
               <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
                  
               </div>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#BA704F] text-[#BA704F] hover:bg-[#BA704F] hover:text-white px-10 py-2">
                     See all items
                  </Button>
               </Link>
            </div>
         </section>

         {/* Faq */}
         <section
            id="faq"
            className="max-w-7xl max-h-xl space-y-8 mx-auto p-5 my-32"
         >
            <div className="container flex flex-col items-justify px-4 py-8 mx-auto md:p-8 border border-black bg-white rounded-lg">
               <div>
                  <h2 className="text-2xl font-semibold sm:text-4xl">
                     Frequently Asked Questions
                  </h2>
               </div>
               <div className="space-y-4 mt-8 mb-6">
                  <Faq
                     status="open"
                     title="Kukurukuurkrurkurkrkrurkrkruk?"
                     content="lorem ipsum skdskdsj asdjnaskdjahsfj asljkashdaslfhd dfjlasdfhdjlcbd dsfjkadsfhdsjfbdsc dsfbdsjfbdsjbdsc dsjfdsjdscbdsc dsc jdkfhdslkcbzd"
                  />

                  <Faq title="ayam itu apa ?" content="ikan bilis" />
                  <Faq title="ayam itu apa ?" content="ikan bilis" />
                  <Faq title="ayam itu apa ?" content="ikan bilis" />
                  <Faq title="ayam itu apa ?" content="ikan bilis" />
               </div>
            </div>
         </section>

         {/* end */}
      </div>
   );
}
