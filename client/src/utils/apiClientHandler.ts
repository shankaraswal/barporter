// src/utils/apiClient.ts

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;
