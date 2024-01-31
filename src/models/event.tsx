
interface Event {
  id: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  user_id: string; 
  status: string;
  link: string;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
  organization_id: number;
}

export default Event;
