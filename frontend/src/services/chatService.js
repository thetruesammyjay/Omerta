
import axios from 'axios';
import { API_URL } from './api';

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/chat/messages/`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat/messages/`, { message });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};