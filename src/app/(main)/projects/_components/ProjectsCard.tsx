import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsCard() {
   const projects = await db.project.findMany({
      select: {
         id: true,
         title: true,
         description: true,
         major: true,
         teamMembers: true,
         teamName: true,
         batch: true,
         codeLink: true,
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

   //TODO: Make the image swipeable
   return (
      <div className="grid grid-cols-2 gap-5">
         {projects.map((project) => (
            <div
               className="space-y-4 rounded-lg border border-black"
               key={project.id}
            >
               {project.ProjectImage.map((image) => (
                  <img
                     key={image.imageUrl}
                     src={image.imageUrl || "/PUComputing.png"}
                     alt={project.title}
                     width={256}
                     height={256}
                     className="mx-auto h-64 w-full rounded-t-lg"
                  />
               ))}
               <div className="space-y-2 p-3">
                  {project.teamName && <p>Team Name: {project.teamName}</p>}
                  <p>Members: {project.teamMembers.join(", ")}</p>
                  <p className="text-center font-semibold">{project.title}</p>
                  <p className="text-zinc-600">{project.description}</p>
                  <Link
                     className="text-blue-500 duration-300 hover:text-blue-600 hover:underline"
                     href={project.codeLink}
                     target="_blank"
                  >
                     Source Code
                  </Link>
                  <p className="text-end text-sm">
                     {project.major} - {project.batch}
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
}
