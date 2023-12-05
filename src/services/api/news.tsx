import axios from "axios";
import News from "../../models/news";

const API_URL = "http://api.dev.irfansaf.com/news/";

export const fetchNews = async (): Promise<News[]> => {
   try {
      const response = await axios.get(API_URL);
      const newsData = response.data?.data?.attributes || [];
      return newsData as News[];
   } catch (error) {
      console.error("Error fetching news", error);
      throw error;
   }
};
