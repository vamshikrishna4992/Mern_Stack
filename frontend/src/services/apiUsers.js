import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/auth'; // Base URL for the API



export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${apiUrl}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};


export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${apiUrl}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};