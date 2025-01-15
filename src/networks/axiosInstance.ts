import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import { toast } from 'react-toastify';
import { ErrorResponseType } from '@/networks/dto/errorResponseDto';

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.url?.includes('/api/contact')) {
      config.baseURL = '';
    }

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
    if (error instanceof AxiosError) {
      // 로깅 안 하는 apis
      const paths = ['relogin'];
      if (paths.some((path) => error.config?.url?.includes(path))) {
        return;
      }

      const errorResponse = error as ErrorResponseType;
      if (errorResponse.response?.data) {
        const { message } = errorResponse.response.data;
        toast(message, {});
      }
    }
    return Promise.reject(error);
  },
);

export { AxiosInstance };
