import axios from "axios";

const API_URL = "http://localhost:3000/api/memories";

export const getMemories = async () => {
      const response = await axios.get(API_URL);
      console.log(response.data);
      return response.data;
};

export const addMemory = async (memory) => {
      const response = await axios.post(API_URL, memory);
      return response.data;
};

export const deleteMemory = async (id) => {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
};
    

export const updateMemory = async (id, memory) => {
      const response = await axios.put(`${API_URL}/${id}`, memory);
      return response.data;
};
