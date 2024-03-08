import { API_ASPIRATION } from "@/config/config";
import axios from "axios";
import Aspirations from "@/models/aspiration";

export const fetchAspirations = async (): Promise<Aspirations[]> => {
    try {
       const response = await axios.get(API_ASPIRATION);
       console.log("API Response:", response);
       const aspirationData = response.data?.aspirations || [];
       aspirationData.forEach((aspiration: Aspirations) => {
          aspiration.updated_at = new Date(aspiration.updated_at);
          aspiration.created_at = new Date(aspiration.created_at);
       });

       return aspirationData as Aspirations[];
    } catch (error) {
       // Log an error message and rethrow the error.
       console.error("Error fetching aspirations", error);
       throw error;
    }
};
