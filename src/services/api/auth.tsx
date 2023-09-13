import axios, {AxiosResponse} from "axios";
import User from "../../models/user";

const API_URL = "http://api.dev.irfansaf.com/api/v1/auth";

export async function Login(
   email: string,
   password: string
): Promise<AxiosResponse> {
   return await axios.post(`${API_URL}/login`, {
      email,
      password,
   });
}

export async function Register(user: User): Promise<AxiosResponse> {
   try {
      return await axios.post(
          `${API_URL}/register`,
          user
      );
   } catch (error) {
      console.error("Registration failed:", error);
      throw new Error("Registration failed"); // You can customize this error message
   }
}
