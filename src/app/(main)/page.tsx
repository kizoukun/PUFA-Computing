import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import AnagataLogo from "@/assets/anagatalogo.svg";
import Link from "next/link";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import NewsCard from "@/components/news/NewsCard";
import NewsCardBig from "@/components/news/NewsCardBig";
import StudyProgCard from "@/components/StudyProgCard";
import VCDStudyProgCard from "@/components/VCDStudyProgCard";
import CardStore from "@/components/store/CardStore";
import EventSection from "@/components/event/EventSection";
import CompreciationCard from "@/components/CompreciationCard";
import { fetchNews } from "@/services/api/news";

export default async function Index() {
   const events = await fetchNews();

   return (
      <div className="min-h-screen">
         <div>
            <Image
               src={BGImage}
               alt="PUMA Photo"
               width="0"
               height="0"
               sizes="100vw"
               className="h-auto w-full"
            />
         </div>
         <section
            id="introduction"
            className="container mx-auto -mt-24 sm:-mt-32 md:-mt-48 lg:-mt-64 xl:-mt-96"
         >
            <img
               className="mx-auto my-5 aspect-video h-48 md:h-96 rounded-2xl"
               src="../member.jpg"
               alt="PUMA Photo"
            />
            <div className="space-y-2 px-8 text-justify md:px-24">
               <p className="text-xl ">
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
            className="mx-auto my-32 max-w-7xl space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#0C8CE9]"></span>
               Study Programs
            </h2>
            <h3 className="mx-auto max-w-xl ">
               The Faculty of Computing has four study programs that produce
               qualified student graduates in their fields.
            </h3>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
               <StudyProgCard
                  title="Informatics"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
                  link=""
               />
               <StudyProgCard
                  title="Information System"
                  article="Informatics study program that will produce qualified
               graduates in the field of educators who are experts in
               Informatics."
                  link=""
               />
               <VCDStudyProgCard
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
                  link="news"
               />
            </div>
         </section>
         {/* end */}

         {/* cabinet */}
         <section
            id="cabinet"
            className="mx-auto my-32 max-w-6xl p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#1FA820]"></span>
               CABINET 2023/2024
            </h2>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-6 md:gap-5 md:py-[6rem]">
               {/* logo anagata */}
               <div className="mt-5 aspect-square h-[20rem] rounded-xl p-1 shadow-lg md:col-span-2 md:mt-0">
                  <Image
                     className=" mx-auto object-cover "
                     src={AnagataLogo}
                     width="0"
                     height="0"
                     alt="PUMA Photo"
                     loading="lazy"
                  />
               </div>
               {/* cabinet content */}
               <div className="mb-5 h-[20rem] rounded-xl border-2  border-[#1FA820] bg-white p-0.5 sm:p-6 md:col-span-4 md:mt-0 md:flex md:px-10">
                  <div className="px-10 py-10 text-[#353535] md:flex md:flex-col md:justify-center md:py-5">
                     <div className="flex gap-5 md:gap-5">
                        <p className="mt-0.5 text-left text-2xl font-bold text-[#353535]">
                           ANAGATA CABINET
                        </p>
                        <div className="h-[1.5px] w-[13rem] self-center bg-[#1FA820]"></div>
                     </div>

                     {/* content */}
                     <div className="text-md mt-10 text-justify font-bold md:text-xl">
                        <p className="mb-4 text-[#353535]">
                           “One Team, One Vision, One for Computing”
                        </p>
                        <p className="text-[#515151]">
                           We are attempting to be a bridge for the Computing
                           Faculty in a more positive way by growing together
                           with us.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            {/* button kthx */}
            <Link href="/" className="flex justify-center">
               <Button className="border-[#1FA820] px-10 py-2 text-[#1FA820] hover:bg-[#1FA820] hover:text-white">
                  See all News
               </Button>
            </Link>
         </section>
         {/* end */}

         {/* event */}

         <section
            id="event"
            className="max-w-8xl mx-auto my-32 space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#E50D0D]"></span>
               Computing Events
            </h2>
            <h3 className="">
               Discover the latest updates on events in our faculty.
            </h3>

            <div className="flex flex-col items-center justify-center gap-7 md:flex-row"></div>
            <EventSection />
         </section>
         {/* end */}

         {/* news */}
         <section
            id="news"
            className="max-h-xl mx-auto my-32 max-w-7xl space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#FF6F22]"></span>
               Computing News
            </h2>
            <h3 className="">
               The latest news about research, technology, achievements, and
               campus life
            </h3>
            <div className="grid grid-cols-1 gap-8 text-justify md:grid-cols-2">
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
                  <Button className="border-[#FF6F22] px-10 py-2 text-[#FF6F22] hover:bg-[#FF6F22] hover:text-white">
                     See all News
                  </Button>
               </Link>
            </div>
         </section>
         {/* end */}

         {/* compreciacion */}

         <section
            id="compreciacion"
            className="max-h-xl mx-auto my-32 max-w-7xl space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#AF95FF]"></span>
               Compreciation
            </h2>
            <h3 className="">Appreciation to Computizen’s best projects.</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
               <CompreciationCard
                  date="September 11, 2023"
                  title="Student Analysis Using Python"
                  name="Paman, and Aleph"
                  description="a student analysis system that can help us to see our performance in campus and give the recommendation for the further ..."
                  major="Informatics"
               />
               <CompreciationCard
                  date="September 11, 2023"
                  title="Student Analysis Using Python"
                  name="Paman, and Aleph"
                  description="a student analysis system that can help us to see our performance in campus and give the recommendation for the further ..."
                  major="Informatics"
               />
               <CompreciationCard
                  date="September 11, 2023"
                  title="Student Analysis Using Python"
                  name="Paman, and Aleph"
                  description="a student analysis system that can help us to see our performance in campus and give the recommendation for the further ..."
                  major="Informatics"
               />
            </div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#AF95FF] px-10 py-2 text-[#AF95FF] hover:bg-[#AF95FF] hover:text-white">
                     See all items
                  </Button>
               </Link>
            </div>
         </section>
         {/* end */}

         {/* store */}
         <section
            id="store"
            className="mx-auto my-32 max-w-7xl space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#BA704F]"></span>
               Computing Store
            </h2>
            <h3 className="">Special merchandise for all Computizens</h3>

            <div className="container mx-auto p-10 md:p-20 md:py-10">
               <div className="flex justify-center">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                     <CardStore
                        image="../store/merch.png"
                        title="Computing Varsity"
                        category="Jacket"
                        price={343}
                     />
                     <CardStore
                        image="../store/merch.png"
                        title="Computing Varsity"
                        category="Jacket"
                        price={343}
                     />
                     <CardStore
                        image="../store/merch.png"
                        title="Computing Varsity"
                        category="Jacket"
                        price={343}
                     />
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/merch" className="block w-max">
                  <Button className="border-[#BA704F] px-10 py-2 text-[#BA704F] hover:bg-[#BA704F] hover:text-white">
                     See all items
                  </Button>
               </Link>
            </div>
         </section>

         {/* Faq */}
         <section
            id="faq"
            className="max-h-xl mx-auto my-32 max-w-7xl space-y-8 p-5"
         >
            <div className="items-justify container mx-auto flex flex-col rounded-lg border border-black bg-white px-4 py-8 md:p-8">
               <div>
                  <h2 className="text-2xl font-semibold sm:text-4xl">
                     Frequently Asked Questions
                  </h2>
               </div>
               <div className="mb-6 mt-8 space-y-4">
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
