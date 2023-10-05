import axios, { AxiosResponse } from "axios";

const API_URL = 'http://api.dev.irfansaf.com/news/';

//news
export async function News(
    id: number,
    title: string,
    description: string,
    date: string 
): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/news`, {
       id,
       title,
       description,
       date
    });
    
}
