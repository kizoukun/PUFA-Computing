import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import Link from "next/link";

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
               className="w-full h-auto mx-auto"
               src="../fotoheader.png"
               alt="PUMA Photo"
            />
            <div className="px-8 md:px-16 space-y-2">
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
               <Link
                  href="/"
                  className="block w-max border-2 border-[#0C8CE9] p-2 hover:bg-[#0C8CE9] hover:text-white duration-300 rounded-lg mt-4"
               >
                  See Details
               </Link>
            </div>
         </section>
         <section className="min-h-screen"></section>
      </div>
   );
}
