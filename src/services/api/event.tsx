import axios from "axios";
import Event from "../../models/event";
import { API_EVENT } from "@/config/config";

/**
 * The base URL of the API endpoint for events.
 * @type {string}
 */

/**
 * Fetches a list of events from the specified API endpoint.
 *
 * @returns {Promise<Event[]>} A promise that resolves to an array of Event objects.
 * @throws {Error} If an error occurs during the API request.
 */
export const fetchEvents = async (): Promise<Event[]> => {
   try {
      // Make a GET request to the API endpoint.
      const response = await axios.get(API_EVENT);

      // Extract event data from the response.
      const eventData = response.data?.events || [];

      // Return the array of Event objects.
      return eventData as Event[];
   } catch (error) {
      // Log an error message and rethrow the error.
      console.error("Error fetching events", error);
      throw error;
   }
};
