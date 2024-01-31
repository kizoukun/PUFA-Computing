import axios from "axios";
import Event from "../../models/event";

/**
 * The base URL of the API endpoint for events.
 * @type {string}
 */
const API_URL = "http://api.irfansaf.com/api/v1/event";

/**
 * Fetches a list of events from the specified API endpoint.
 *
 * @returns {Promise<Event[]>} A promise that resolves to an array of Event objects.
 * @throws {Error} If an error occurs during the API request.
 */
export const fetchEvents = async (): Promise<Event[]> => {
   try {
     const response = await axios.get(API_URL);
 
     if (!response.data?.events) {
       throw new Error("Invalid API response format");
     }
 
     const eventData = response.data.events || [];
     return eventData as Event[];
   } catch (error) {
     console.error("Error fetching events", error);
     throw error;
   }
 };
 
 
 
