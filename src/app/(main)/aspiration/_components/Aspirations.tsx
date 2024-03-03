import AspirationCard from "@/components/aspiration/AspirationCard";
import { db } from "@/lib/db";

export default async function AspirationsCards() {
   const aspiration = await db.aspiration.findMany({
      select: {
         id: true,
         to: true,
         from: true,
         anonymous: true,
         subject: true,
         message: true,
         createdAt: true,
         AspirationLike: {
            select: {
               id: true,
            },
         },
      },
      orderBy: {
         createdAt: "desc",
      },
   });

   //TODO: Handle likes based on user loggedin

   return (
      <div className="grid w-full grid-cols-1 gap-8 py-4 md:grid-cols-2">
         {aspiration.map((asp) => (
            <AspirationCard
               key={asp.id}
               title={asp.subject}
               date={asp.createdAt}
               from={asp.anonymous ? "Anonymous" : asp.from}
               to={asp.to}
               message={asp.message}
            />
         ))}
      </div>
   );
}
