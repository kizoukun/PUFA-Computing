import AspirationCard from "@/components/aspiration/AspirationCard";
import { fetchAspirations } from "@/services/api/aspiration";
import Aspirations from "@/models/aspiration";

export default async function AspirationsCards() {
   const aspirations = await fetchAspirations();

   if (!aspirations?.length) return <div>Loading aspirations...</div>

   //TODO: Handle likes based on user loggedin

   return (
      <div className="grid w-full grid-cols-1 gap-8 py-4 md:grid-cols-2">
         {aspirations.map((aspiration) => (
            <AspirationCard key={aspiration.id} aspiration={aspiration}/>
         ))}
      </div>
   );
}
