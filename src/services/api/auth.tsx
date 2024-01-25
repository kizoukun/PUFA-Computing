import axios, { AxiosResponse } from "axios";
import User from "../../models/user";

import { API_LOGIN } from "@/config/config";
import { API_REGISTER } from "@/config/config";

export async function Login(username: string, password: string): Promise<AxiosResponse> {
   return axios.post(`${API_LOGIN}`, {
      username,
      password,
   });
}

export async function Register(user: User): Promise<AxiosResponse> {
   return axios.post(`${API_REGISTER}`, {
      user,
   });
}