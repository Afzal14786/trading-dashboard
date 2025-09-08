import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // backend base URL
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

// handle token refresh (if backend provides it via response headers)
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
    }
    return Promise.reject(error);
  }
);

export default api;
