'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { fetchEventBySlug } from "@/services/api/event";

export default async function EventDetailsPage( { params }: { params: { slug: string } }) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const { slug } = params;
   const event = await fetchEventBySlug(slug);

   if (!event) {
      router.push("/404");
   }

   return (
      <div>
         <h1>{event.title}</h1>
         <p>{event.description}</p>
         <p>{event.status}</p>
         <p>{event.organization}</p>
      </div>
   );
}
