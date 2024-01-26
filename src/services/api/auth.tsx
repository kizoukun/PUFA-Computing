import { API_LOGIN } from "@/config/config";

const setAuthHeader = () => {
   const token = localStorage.getItem("access_token");
   if (token) {
      return { Authorization: `Bearer ${token}` };
   }
   return {};
}

export async function Login(
   username: string,
   password: string
): Promise<Response> {
   setAuthHeader();
   return fetch(API_LOGIN, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         username,
         password,
      }),
   });
}

export async function Logout(): Promise<Response> {
   return fetch(API_LOGIN, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
   });
}

export async function Register(
   username: string,
   password: string,
   email: string
): Promise<Response> {
   setAuthHeader();
   return fetch(API_LOGIN, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         username,
         password,
         email,
      }),
   });
}