import axios from "axios";
import { API_USER } from "@/config/config";

// User
export async function GetUserProfile() {
   try {
      const response = await axios.get(`${API_USER}/:id`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function UpdateUserProfile() {
   try {
      const response = await axios.put(`${API_USER}/update`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function DeleteUserProfile() {
   try {
      const response = await axios.delete(`${API_USER}/delete`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function Logout() {
   try {
      const response = await axios.post(`${API_USER}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

// Admin
export async function GetUser() {
   try {
      const response = await axios.get(`${API_USER}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}
