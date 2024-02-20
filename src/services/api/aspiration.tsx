// import { API_ASPIRATION } from "@/config/config";
// import axios from "axios";

// export const fetchAspirations = async (): Promise<Event[]> => {
//     try {
//        // Make a GET request to the API endpoint.
//        const response = await axios.get(API_ASPIRATION);
 
//        // Log the response to the console.
//        console.log("API Response:", response);
 
//        // Extract event data from the response.
//        const eventData = response.data?.events || [];
 
//        // Return the array of Event objects.
//        return eventData as Event[];
//     } catch (error) {
//        // Log an error message and rethrow the error.
//        console.error("Error fetching aspirations", error);
//        throw error;
//     }
// }; 
