import axios from "axios";

const apiClient = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: "http://localhost:4000/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("access_token");
    if (user) {
      const { accessToken } = JSON.parse(user);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
