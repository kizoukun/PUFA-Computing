import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import Link from "next/link";
import Button from "@/components/Button";
import CardStoreUp from "@/components/CardStoreUp";
import CardStoreDown from "@/components/CardStoreDown";
import EventSection from "@/components/event/EventSection";
import Faq from "@/components/Faq";
import CompreciationCard from "@/components/CompreciationCard";
import NewsCard from "@/components/news/NewsCard";
import NewsCardBig from "@/components/news/NewsCardBig";

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
            id="intro"
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
            className="max-w-3xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#0C8CE9] mr-4"></span>
               Study Programs in the Faculty of Computing
            </h2>
            <h3 className="">
               The Faculty of Computing has two study programs that produce
               qualified student graduates in their fields.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="bg-white hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#54A8E2] transition-all duration-300 shadow-lg rounded-lg p-3">
                  <p>Informatics</p>
                  <hr className="mt-4 mb-12 border border-[#00357C] w-16 mx-auto" />
                  <p className="my-16">
                     Informatics study program that will produce qualified
                     graduates in the field of educators who are experts in
                     Informatics.
                  </p>
                  <Button className="w-max mx-auto my-4">See Details</Button>
               </div>
               <div className="bg-white hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-[#54A8E2] shadow-lg rounded-lg p-3">
                  <p>Information System</p>
                  <hr className="mt-4 mb-12 border border-[#00357C] w-16 mx-auto" />
                  <p className="my-16">
                     Informatics study program that will produce qualified
                     graduates in the field of educators who are experts in
                     Informatics.
                  </p>
                  <Button className="w-max mx-auto my-4">See Details</Button>
               </div>
            </div>
         </section>
         {/* end */}

         {/* cabinet */}
         <section
            id="cabinet"
            className="max-w-3xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#1FA820] mr-4"></span>
               CABINET 2023/2024
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* logo anagata */}
               <div className="p-1 shadow-lg">
                  <img
                     className=" mx-auto"
                     src="../anagatalogo.jpeg"
                     alt="PUMA Photo"
                  />
               </div>
               {/* cabinet content */}
               <div className="p-0.5 rounded-md bg-[#1FA820]">
                  <div className="rounded-md bg-white pt-20 sm:p-6">
                     <div className="text-[#353535]">
                        <p className="mt-0.5 text-2xl text-left font-bold">
                           ANAGATA CABINET
                        </p>
                        {/* content */}
                        <div className="mt-10 text-xl font-bold text-justify">
                           <p className="mb-4">
                              “One Team, One Vision, One for Computing”
                           </p>
                           <p className="">
                              We are attempting to be a bridge for the Computing
                              Faculty in a more positive way by growing together
                              with us.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
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
               The latest news about research, technology, achievements, and
               campus life
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify">
               <NewsCardBig
                  image="../aot.jpg"
                  title="Attack On Titan"
                  description="AOT DEBEST"
                  time="10 november"
               />
               <div className="grid grid-cols-2 gap-4">
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
               <a href="/" className="block w-max">
                  <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
                     See all News
                  </Button>
               </a>
            </div>
         </section>
         {/* end */}

         {/* compreciacion */}

         <section
            id="compreciacion"
            className="max-w-7xl max-h-xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#02ABF3] mr-4"></span>
               Compreciation
            </h2>
            <h3 className="">Appreciation to Computizen’s best projects.</h3>

            <div className="grid grid-cols-2 gap-2 gap-y-6">
               <CompreciationCard
                  major="IT"
                  title="Shingeki No Kyojin"
                  description="Hajime Isayama"
                  image="../aot.jpg"
               />
               <CompreciationCard
                  major="IS"
                  title="Shingeki No Kyojin"
                  description="Hajime Isayama"
                  image="../aot.jpg"
               />
               <CompreciationCard
                  major="ID"
                  title="Shingeki No Kyojin"
                  description="Hajime Isayama"
                  image="../aot.jpg"
               />
               <CompreciationCard
                  major="VCD"
                  title="Shingeki No Kyojin"
                  description="Hajime Isayama"
                  image="../aot.jpg"
               />
            </div>
         </section>
         {/* end */}

         {/* store */}
         <section
            id="store"
            className="max-w-7xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#1FA820] mr-4"></span>
               Computing Store
            </h2>

            <div className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
               <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
                  <CardStoreUp
                     image="../anagatalogo.jpeg"
                     number="01"
                     title="adasd"
                     description="adasdads"
                     bgColor="bg-red-100"
                  />

                  <CardStoreDown
                     image="../anagatalogo.jpeg"
                     number="01"
                     title="adasd"
                     description="adasdads"
                     bgColor="bg-red-100"
                  />

                  <CardStoreUp
                     image="../anagatalogo.jpeg"
                     number="01"
                     title="adasd"
                     description="adasdads"
                     bgColor="bg-red-100"
                  />

                  <CardStoreDown
                     image="../anagatalogo.jpeg"
                     number="01"
                     title="adasd"
                     description="adasdads"
                     bgColor="bg-red-100"
                  />
               </div>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#02ABF3] text-[#02ABF3] hover:bg-[#02ABF3] hover:text-white px-10 py-2">
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
               </div>
            </div>
         </section>

         {/* end */}
      </div>
   );
}
