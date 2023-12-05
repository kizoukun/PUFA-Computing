import { v4 as uuid } from "uuid";
interface Event {
   id: number;
   title: string;
   description: string;
   start_date: Date;
   end_date: Date;
   user_id: typeof uuid;
   status: string;
   link: string;
   thumbnail: string;
   created_at: Date;
   updated_at: Date;
}

export default Event;
