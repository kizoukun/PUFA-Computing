import AspirationCard from "@/components/aspiration/AspirationCard";
import { db } from "@/lib/db";

export default async function AspirationsCards() {
   const aspirations = await db.aspiration.findMany({
      orderBy: {
         createdAt: "desc",
      },
   });

   //TODO: Handle likes based on user loggedin

   return (
      <div className="grid w-full grid-cols-1 gap-8 py-4 md:grid-cols-2">
         {aspirations.map((aspiration) => (
            <AspirationCard key={aspiration.id} aspiration={aspiration} />
         ))}
      </div>
   );
}
