import axios from 'axios';
import User from '../../models/user';

const API_URL = 'http://api.dev.irfansaf.com/api/v1/auth';

export async function Login(email : string, password : string) {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        return response.data;
    }   catch (error) {
        console.log(error)
        throw error;
    }
}

export async function Register(user : User) {
    try {
        const response = await axios.post(`${API_URL}/register`, user);
        return response.data;
    }   catch (error) {
        console.log(error)
        throw error;
    }
}