import axios from "axios";
import Event from "../../models/event";

const API_URL = "http://api.dev.irfansaf.com/event/";

export const fetchEvents = async (): Promise<Event[]> => {
   try {
      const response = await axios.get(API_URL);
      const eventData = response.data?.data?.attributes || [];
      return eventData as Event[];
   } catch (error) {
      console.error("Error fetching events", error);
      throw error;
   }
};
