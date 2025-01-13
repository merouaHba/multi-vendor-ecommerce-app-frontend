import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
    timeout: 100000,
  withCredentials:true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
    (config) => {
       
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
   async (error) => {
        const originalRequest = error.config;
        // Check if the error is due to unauthorized access and we have not tried refreshing yet 
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await api.get('/auth/refresh-token');
                const { accessToken } = response.data;
              localStorage.setItem('accessToken', accessToken);
                return api(originalRequest);
            } catch (error) {
                
                // Handle unauthorized access
                // localStorage.removeItem('token');
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default api;