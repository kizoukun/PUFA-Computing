import axios from "axios";
import News from "../../models/news";

const API_URL = "http://api.irfansaf.com/api/v1/news";

export const fetchNews = async (): Promise<News[]> => {
   try {
      const response = await axios.get(API_URL);
      const newsData = response.data?.data?.attributes || [];
      console.log("API Response:", response.data); 
      
      return newsData as News[];
   } catch (error) {
      console.error("Error fetching news", error);
      throw error;
   }
};
