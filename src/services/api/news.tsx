import axios from "axios";
import News from "../../models/news";

const API_URL = "http://localhost:8080/news/";

export const fetchNews = async (): Promise<News[]> => {
    try {
        const response = await axios.get(API_URL);
        const newsData = response.data?.data?.attributes || [];
        return newsData.map((news: any) => ({
            id: news.id,
            title: news.title,
            content: news.content,
            user_id: news.user_id,
            publish_date: news.publish_date,
            likes: news.likes,
            created_at: news.created_at,
            updated_at: news.updated_at,
        }));
    } catch (error) {
        console.error('Error fetching news', error);
        throw error;
    }
};
