import axios from 'axios';


export const getJobs = async () => {
      const response = await axios.get('http://localhost:3000/jobs');
      console.log(response.data);
      return response.data;
}

export const addJob = async (job) => {
      const response = await axios.post('http://localhost:3000/jobs', job);
      console.log(response.data);
      return response.data;
}

export const updateJob = async (id, job) => {
      const response = await axios.put(`http://localhost:3000/jobs/${id}`, job);
      console.log(response.data);
      return response.data;
}

export const deleteJob = async (id) => {
      const response = await axios.delete(`http://localhost:3000/jobs/${id}`);
      console.log(response.data);
      return response.data;
}