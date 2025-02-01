
import { API_URL } from './api';  // Import API_URL from api.js

export const getAnalytics = async () => {
  try {
    const response = await axios.get(`${API_URL}/analytics/`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};