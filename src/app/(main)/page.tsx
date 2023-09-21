import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import Link from "next/link";
import Button from "@/components/Button";

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
            className="max-w-3xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#E50D0D] mr-4"></span>
               Computing Events
            </h2>
            <h3 className="">
               The latest news about research, technology, achievements, and
               campus life
            </h3>
            <div className="">
               <div className="flex items-center justify-center">
                  <Link href="/" className="block w-max">
                     <Button className="border-[#E50D0D] text-[#E50D0D] px-10 py-2">
                        See all Events
                     </Button>
                  </Link>
               </div>
            </div>
         </section>
         {/* end */}

         {/* news */}
         <section
            id="news"
            className="max-w-3xl space-y-8 mx-auto p-5 my-32 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="border-l-8 border-l-[#705100] mr-4"></span>
               Computing News
            </h2>
            <h3 className="">
               The latest news about research, technology, achievements, and
               campus life
            </h3>
            <div className="">
               {/* grid */}
               <div className="flex items-center justify-center">
                  <Link href="/" className="block w-max">
                     <Button className="border-[#705100] text-[#705100] px-10 py-2">
                        See all News
                     </Button>
                  </Link>
               </div>
            </div>
         </section>
         {/* end */}
      </div>
   );
}
