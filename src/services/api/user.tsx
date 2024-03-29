import axios from "axios";
import { API_USER } from "@/config/config";
import Event from "@/models/event";

/** Fetches the events that the user has registered for from the API.
 * @param {string} userId The ID of the user to fetch events for.
 * @returns {Promise<Event[]>} A promise that resolves to an array of Event objects.
 * @throws {Error} If an error occurs during the API request.
 */
export async function fetchUserEvents(userId: string): Promise<Event[]> {
   try {
      const token = localStorage.getItem("access_token");
      if (!token) {
         throw new Error("No access token found");
      }

      const response = await axios.get(`${API_USER}/registered-events`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data?.data || [];
   } catch (error) {
      console.error("Error fetching user events", error);
      throw error;
   }
}
