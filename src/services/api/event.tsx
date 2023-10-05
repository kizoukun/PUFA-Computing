import axios from "axios";
import Event from "../../models/event";

const API_URL = "http://localhost:8080/event/";

export const fetchEvents = async (): Promise<Event[]> => {
    try {
        const response = await axios.get(API_URL);
        const eventData = response.data?.data?.attributes || [];
        return eventData.map((event: any) => ({
            id: event.id,
            title: event.title,
            description: event.description,
            start_date: event.start_date,
            end_date: event.end_date,
            user_id: event.user_id,
            status: event.status,
            link: event.link,
            thumbnail: event.thumbnail,
            created_at: event.created_at,
            updated_at: event.updated_at,
        }));
        } catch (error) {
            console.error('Error fetching events', error);
            throw error;
        }
};
