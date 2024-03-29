import { db } from "@/lib/db";
import ButtonToggleLike from "./ButtonToggleLike";
import AdminReply from "./AdminReply";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function AspirationsCards() {
   const session = await getServerSession(authOptions);
   const aspirations = await db.aspiration.findMany({
      orderBy: {
         createdAt: "desc",
      },
      select: {
         id: true,
         major: {
            select: {
               name: true,
            },
         },
         from: true,
         subject: true,
         message: true,
         anonymous: true,
         createdAt: true,
         adminResponse: true,
         AspirationLike: {
            select: {
               id: true,
               userId: true,
            },
         },
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

   function isAspirationLikedByUser(aspirationId: String) {
      if (!session) {
         return false;
      }

      const user = session.user;
      if (!user) {
         return false;
      }

      return aspirations
         .find((aspiration) => aspiration.id == aspirationId)
         ?.AspirationLike.some(
            (aspirationLike) => aspirationLike.userId === user.id
         )
         ? true
         : false;
   }

   return (
      <div className="grid w-full grid-cols-1 gap-8 py-4 md:grid-cols-2">
         {aspirations.map((aspiration) => (
            <div
               key={aspiration.id}
               className="flex flex-col gap-4 rounded-lg border-2 border-gray-300 p-4 md:p-6"
            >
               <AdminReply
                  message={aspiration.message}
                  adminResponse={aspiration.adminResponse ?? undefined}
                  subject={aspiration.subject}
               />
               <div className="flex flex-col">
                  {/*Author if anonymous show anonymous if its false show user_id*/}
                  <p className="text-[14px] font-semibold text-[#111827]">
                     From:{" "}
                     {aspiration.anonymous ? "Anonymous" : aspiration.from}
                  </p>
                  <div className="flex flex-col gap-2 text-sm md:flex-row md:justify-between">
                     <div className="text-[#6B7280]">
                        <p>
                           To: {aspiration.major.name} <span> · </span>{" "}
                           <span>{dateConvert(aspiration.createdAt)}</span>
                        </p>
                     </div>

                     {/*Like and Like Count*/}
                     <div className="flex flex-row gap-4">
                        <ButtonToggleLike
                           aspirationLike={aspiration.AspirationLike.length}
                           isLiked={isAspirationLikedByUser(aspiration.id)}
                           aspirationId={aspiration.id}
                        />
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
