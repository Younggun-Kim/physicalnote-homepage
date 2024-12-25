import { ApiError } from 'next/dist/server/api-utils';
import { ApiResponse } from '@/app/api/dto/ApiResponseDto';
import { createQueryString, getConfig, HttpError, shouldAddAuth } from './apiUtils';
import { tokenStorage } from '@/app/api/storage/tokenStorage';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface RequestConfig extends RequestInit {
  headers?: HeadersInit;
  params?: Record<string, string>;
}

export const fetchApi = async <T>(endpoint: string, options: RequestConfig = {}): Promise<ApiResponse<T>> => {
  const config = getConfig(options);
  const queryString = createQueryString(options.params);
  const url = `${BASE_URL}${endpoint}${queryString}`;

  if (shouldAddAuth(endpoint) && tokenStorage.hasToken()) {
    const token = `Bearer ${tokenStorage.getToken()}`;
    config.headers = {
      ...config.headers,
      Authorization: token,
    };
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new HttpError(response.status, `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    if (error instanceof ApiError) {
      return { data: null, error: error.message };
    }
    return { data: null, error: 'An unexpected error occurred' };
  }
};
