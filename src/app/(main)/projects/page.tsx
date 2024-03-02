import Image from "next/image";
import PUComputing from "@/assets/PUComputing.png";
import { db } from "@/lib/db";
import Link from "next/link";
import Button from "@/components/Button";

export default async function ProjectsPage() {
   const projects = await db.project.findMany({
      select: {
         id: true,
         title: true,
         description: true,
         major: true,
         ProjectImage: {
            select: {
               imageUrl: true,
            },
         },
      },
      orderBy: {
         createdAt: "desc",
      },
   });
   return (
      <div>
         {/* // title gray thingy */}
         <section className="bg-[#F2F2F2] p-10">
            <div className="mx-auto flex max-w-7xl flex-col border-l-4 border-[#FF6F22] pl-5 ">
               <h1 className="text-[35px] font-[700] text-[#353535]">
                  Computing Projects
               </h1>
               <p className="text-sm font-[500] text-[#353535]">
                  The latest projects uploaded by computizens
               </p>
            </div>
         </section>
         {/* // computing projects content */}
         <section className="mx-auto max-w-7xl p-5 py-[3rem] md:p-10">
            <div className="mb-5 flex items-center justify-between">
               <h1 className="text-[1.2rem] font-black tracking-wide">
                  Latest
               </h1>
               <Link href={"/projects/new"}>
                  <Button>New Projects</Button>
               </Link>{" "}
            </div>
            {/* the big project card */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
               {projects.map((project) => (
                  <div
                     className="space-y-4 rounded-lg border border-black"
                     key={project.id}
                  >
                     <Image
                        src={project.ProjectImage[0]?.imageUrl || PUComputing}
                        alt={project.title}
                        width={256}
                        height={256}
                        className="mx-auto h-64 w-full rounded-t-lg"
                     />
                     <div className="space-y-2 p-3">
                        <p className="text-center font-semibold">
                           {project.title}
                        </p>
                        <p className="text-zinc-600">{project.description}</p>
                        <p className="text-end text-sm">{project.major}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}
