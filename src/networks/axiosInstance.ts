import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.url?.includes('api/') || config.url?.includes('admin/')) {
      const token = getCookie('token');
      if (token) {
        config.headers['Authorization'] = `bearer ${token}`;
      }
    }

    return config;
  },
  (error: AxiosError | Error) => {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export { AxiosInstance };
