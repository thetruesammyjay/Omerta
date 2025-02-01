
import axios from 'axios';
import { API_URL } from './api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login/`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/users/logout/`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/register/`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};