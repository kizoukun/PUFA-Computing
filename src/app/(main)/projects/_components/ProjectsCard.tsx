import { db } from "@/lib/db";
import Image from "next/image";

export default async function ProjectsCard() {
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
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
         {projects.map((project) => (
            <div
               className="space-y-4 rounded-lg border border-black"
               key={project.id}
            >
               <Image
                  src={project.ProjectImage[0]?.imageUrl || "/PUComputing.png"}
                  alt={project.title}
                  width={256}
                  height={256}
                  className="mx-auto h-64 w-full rounded-t-lg"
               />
               <div className="space-y-2 p-3">
                  <p className="text-center font-semibold">{project.title}</p>
                  <p className="text-zinc-600">{project.description}</p>
                  <p className="text-end text-sm">{project.major}</p>
               </div>
            </div>
         ))}
      </div>
   );
}
