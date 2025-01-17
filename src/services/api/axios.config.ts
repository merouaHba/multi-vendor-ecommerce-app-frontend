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
        console.log(accessToken)
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
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await api.get('/auth/refresh-token');
                const { accessToken } = response.data;
              localStorage.setItem('accessToken', accessToken);
                return api(originalRequest);
            } catch (error) {
                
              localStorage.removeItem('accessToken');
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default api;