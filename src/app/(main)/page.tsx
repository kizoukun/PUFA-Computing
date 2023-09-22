import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default async function Index() {
   const card = [
      {
         title: "alip",
         description: "alip",
         status: "alip",
         link: "alip",
      },
   ];
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
            <div className="">
               <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
                  <Card
                     title="Computing Social Project 2023"
                     description="with Rumah Tahfidz Taman Qur’ani"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
               </div>
               <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
               </div>
               {/* button */}
               <div className="mt-4 flex items-center justify-center">
                  <Link href="/" className="block w-max">
                     <Button className="border-[#E50D0D] text-[#E50D0D] hover:bg-[#E50D0D] hover:text-white px-10 py-2">
                        See all Events
                     </Button>
                  </Link>
               </div>
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

            <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
               <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                     <div className="min-h-62">
                        <img
                           className="mx-auto"
                           src="../anagatalogo.jpeg"
                           alt=""
                        />
                     </div>
                     <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
                        01.
                     </h1>
                     <h2 className="font-bold mb-5 text-gray-800">
                        Stylish Egg Chair
                     </h2>
                     <p className="text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id beatae repellendus nam! Dolor dignissimos unde,
                        dolore laboriosam atque numquam quam.
                     </p>
                  </article>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                     <div className="min-h-62">
                        <img
                           className="mx-auto"
                           src="../anagatalogo.jpeg"
                           alt=""
                        />
                     </div>
                     <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
                        02.
                     </h1>
                     <h2 className="font-bold mb-5 text-gray-800">
                        Stylish Leather Bag
                     </h2>
                     <p className="text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id beatae repellendus nam! Dolor dignissimos unde,
                        dolore laboriosam atque numquam quam.
                     </p>
                  </article>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                     <div className="min-h-62">
                        <img
                           className="mx-auto"
                           src="../anagatalogo.jpeg"
                           alt=""
                        />
                     </div>
                     <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
                        03.
                     </h1>
                     <h2 className="font-bold mb-5 text-gray-800">
                        Modern Wooden Chair
                     </h2>
                     <p className="text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id beatae repellendus nam! Dolor dignissimos unde,
                        dolore laboriosam atque numquam quam.
                     </p>
                  </article>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                     <div className="min-h-62">
                        <img
                           className="mx-auto"
                           src="../anagatalogo.jpeg"
                           alt=""
                        />
                     </div>
                     <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">
                        04.
                     </h1>
                     <h2 className="font-bold mb-5 text-gray-800">
                        Comfortable Chair
                     </h2>
                     <p className="text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id beatae repellendus nam! Dolor dignissimos unde,
                        dolore laboriosam atque numquam quam.
                     </p>
                  </article>
               </div>
            </section>
            <div className="flex items-center justify-center">
                  <Link href="/" className="block w-max">
                     <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
                        See all merchandise
                     </Button>
                  </Link>
               </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* grid */}
               <div className="p-1 shadow-lg mx-aut">
                  <img
                     className=" mx-auto"
                     src="../anagatalogo.jpeg"
                     alt="PUMA Photo"
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
                  <Card
                     title="Computing Social Project 2023"
                     description="tset"
                     status="Completed"
                     link="#"
                  />
               </div>
               <div className="flex items-center justify-center">
                  <Link href="/" className="block w-max">
                     <Button className="border-[#705100] text-[#705100] hover:bg-[#705100] hover:text-white px-10 py-2">
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
