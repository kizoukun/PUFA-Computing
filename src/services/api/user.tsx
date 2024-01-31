import axios from "axios";

const API_URL = "http://api.irfansaf.com/api/v1/user";

// User
export async function GetUserProfile() {
   try {
      const response = await axios.get(`${API_URL}/:id`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function UpdateUserProfile() {
   try {
      const response = await axios.put(`${API_URL}/user/update`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function DeleteUserProfile() {
   try {
      const response = await axios.delete(`${API_URL}/user/delete`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function Logout() {
   try {
      const response = await axios.post(`${API_URL}/logout`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}

// Admin
export async function GetUser() {
   try {
      const response = await axios.get(`${API_URL}/user`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
}
