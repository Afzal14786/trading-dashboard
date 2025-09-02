import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5174/api/v1", // backend base URL
  withCredentials: true, // sending cookies to backend for refresh the tokens
});

// Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optionally handle token refresh (if backend provides it via response headers)
api.interceptors.response.use(
  (response) => {
    const newToken = response.headers["x-access-token"];
    if (newToken) {
      localStorage.setItem("accessToken", newToken);
    }
    return response;
  },
  (error) => {
    // handle global errors like unauthorized
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // you can also auto-logout here if needed
    }
    return Promise.reject(error);
  }
);

export default api;
