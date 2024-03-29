import React, { Suspense } from "react";
import AspirationForm from "./_components/Form";
import AspirationsCards from "./_components/Aspirations";
import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Loading from "@/components/Loading";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";

export const revalidate = 600;
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
   title: "Aspirations",
   description:
      "A place for computizens to share their aspirations, ideas, and suggestions with us.",
};

export default async function AspirationPage() {
   const session = await getServerSession(authOptions);
   const organizations = await db.organization.findMany({
      select: {
         id: true,
         name: true,
      },
   });
   return (
      <div>
         {/* // title */}

         <PageHeading
            title="Aspirations"
            description="A place for computizens to share their aspirations, ideas, and suggestions with us."
            borderColor="#E50D0D"
         />

         {/* aspirations box  */}
         <section
            className="bg-cover bg-center bg-repeat px-4 py-8 md:px-[10rem] md:py-16"
            style={{ backgroundImage: `url('/doodle.svg')` }}
         >
            <AspirationForm
               isLoggedIn={session?.user != undefined}
               organizations={organizations}
            />

            <h1 className="mt-20 text-center text-[35px] font-[700] text-[#353535]">
               Aspirations Library
            </h1>
         </section>

         {/* aspirations library */}
         <section className="mb-6 flex flex-col items-center md:mb-10 ">
            <input
               type="text"
               className="absolute w-[60%] translate-y-[-30px] rounded-lg border-2 border-gray-300 p-4 duration-300 hover:scale-110"
               placeholder="Search Aspirations"
            />
            <div className="flex w-full flex-col items-center justify-center rounded-t-3xl border-2 p-8 shadow-lg md:px-16 md:py-16">
               <Suspense fallback={<Loading />}>
                  <AspirationsCards />
               </Suspense>
            </div>
         </section>
      </div>
   );
}
