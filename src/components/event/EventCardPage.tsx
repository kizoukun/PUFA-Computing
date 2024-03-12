import Image from "next/image";
import Event from '@/models/event';

export default function EventCardList({ events }: { events: Event[] }) {
  return (
    <div className="grid scale-90 grid-cols-1 gap-8 md:scale-75 md:grid-cols-3">
      {events.map((event) => (
        <div key={event.id} className="flex gap-4 rounded-[15px] border-[0.5px] border-[#E50D0D] md:gap-8">
          {/* <div>
            <Image
              src={event.image}
              className="h-full w-96 scale-110 rounded-[15px]"
              alt={`${event.title}'s poster`}
              width={384}
              height={256}
            />
          </div> */}
          <div className="flex flex-col justify-between space-y-4 p-2 md:p-4">
            <p className="text-lg font-bold">{event.title}</p>
            <p className="font-bold">{event.end_date.toString()}</p>
            <p className="text-sm md:text-base">{event.description}</p>
            <div className="flex justify-between">
              {/* <p className="text-[16px] font-bold ">{event.major}</p> */}
              <div>
                <button className="rounded-[10px] border border-[#E50D0D] px-2">
                  {event.status}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}