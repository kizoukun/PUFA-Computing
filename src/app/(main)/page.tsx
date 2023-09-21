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
               <Link href="#" className="block w-max">
                  <Button>See Details</Button>
               </Link>
            </div>
         </section>
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
               <div className="bg-white shadow-lg rounded-lg p-3">
                  <p>Informatics</p>
                  <hr className="mt-4 mb-12 border border-[#00357C] w-16 mx-auto" />
                  <p className="my-16">
                     Informatics study program that will produce qualified
                     graduates in the field of educators who are experts in
                     Informatics.
                  </p>
                  <Link href="#" className="block w-max mx-auto">
                     <Button className="my-4">See Details</Button>
                  </Link>
               </div>
               <div className="bg-white shadow-lg rounded-lg p-3">
                  <p>Information System</p>
                  <hr className="mt-4 mb-12 border border-[#00357C] w-16 mx-auto" />
                  <p className="my-16">
                     Informatics study program that will produce qualified
                     graduates in the field of educators who are experts in
                     Informatics.
                  </p>
                  <Link href="#" className="block w-max mx-auto">
                     <Button className="my-4">See Details</Button>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
}
