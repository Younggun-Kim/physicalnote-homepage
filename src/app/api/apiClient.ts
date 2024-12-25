import { fetchApi, RequestConfig } from '@/app/api/fetchApi';

export const apiClient = {
  get: <T>(endpoint: string, options: RequestConfig = {}) => {
    return fetchApi<T>(endpoint, {
      ...options,
      method: 'GET',
    });
  },

  post: <T>(endpoint: string, data: unknown, options: RequestConfig = {}) => {
    return fetchApi<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put: <T>(endpoint: string, data: unknown, options: RequestConfig = {}) => {
    return fetchApi<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete: <T>(endpoint: string, options: RequestConfig = {}) => {
    return fetchApi<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
  },
};
