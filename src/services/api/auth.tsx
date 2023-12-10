import axios, { AxiosResponse } from "axios";
import User from "../../models/user";

const API_URL = "http://localhost:4000/api/v1/auth";

export async function Login(
   username: string,
   password: string
): Promise<AxiosResponse> {
   return axios.post(`${API_URL}/login`, {
      username,
      password,
   });
}

export async function Register(user: User): Promise<AxiosResponse> {
   return axios.post(`${API_URL}/register`, user);
}
