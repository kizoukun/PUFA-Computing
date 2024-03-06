import CompreciationCard from "@/components/main/CompreciationCard";
import { db } from "@/lib/db";

export default async function CompreciationCards() {
   const projects = ({
      select: {
         id: true,
         title: true,
         description: true,
         createdAt: true,
         major: true,
         teamMembers: true,
         ProjectImage: {
            select: {
               imageUrl: true,
            },
         },
      },
      take: 3,
      orderBy: {
         createdAt: "desc",
      },
   });

   const dateConvert = (date: Date) => {
      const months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
      ];
      return `${date.getDate().toString().padStart(2, "0")} ${
         months[date.getMonth()]
      } ${date.getFullYear().toString().padStart(2, "0")}`;
   };

   return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
         {/*{projects.map((project) => (*/}
         {/*   <CompreciationCard*/}
         {/*      key={project.id}*/}
         {/*      date={dateConvert(project.createdAt)}*/}
         {/*      title={project.title}*/}
         {/*      name={project.teamMembers[0]}*/}
         {/*      description={project.description}*/}
         {/*      major={project.major}*/}
         {/*   />*/}
         {/*))}*/}
      </div>
   );
}
