import axios, { AxiosResponse } from "axios";

const API_URL = "http://api.dev.irfansaf.com/event/";

//event
export async function Event(
   id: number,
   title: string,
   description: string,
   date: string
): Promise<AxiosResponse> {
   return axios.get(`${API_URL}/event`);
}
