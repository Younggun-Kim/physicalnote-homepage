import { ApiError } from 'next/dist/server/api-utils';
import { createQueryString, getConfig, HttpError, shouldAddAuth } from './apiUtils';
import { ApiResponse } from '@/app/api/dto/ApiResponseDto';
import { TokenManager } from '@/app/api/tokenManager';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface RequestConfig extends RequestInit {
  headers?: HeadersInit;
  params?: Record<string, string>;
}

const logger = (text: string, ...optionalParams: any[]) => {
  console.log('\n---START--', `\n${text}\n`, optionalParams, '\n ---END--\n');
};

export const fetchApi = async <T>(endpoint: string, options: RequestConfig = {}): Promise<ApiResponse<T>> => {
  const config = getConfig(options);
  const queryString = createQueryString(options.params);
  const url = `${BASE_URL}${endpoint}${queryString}`;
  const hasToken = await TokenManager.hasToken();

  if (shouldAddAuth(endpoint)) {
    if (hasToken) {
      const token = await TokenManager.getToken();
      config.headers = {
        ...config.headers,
        Authorization: `bearer ${token}`,
      };
    } else {
      return { error: '인증이 필요합니다.', statusCode: 401, data: null };
    }
  }

  logger('API Request Header', `[${options.method}] ${url}`, config.headers);
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    logger('API Response', data);

    if (!response.ok) {
      throw new HttpError(response.status, `HTTP error! status: ${response.status}`);
    }

    return { statusCode: 200, data, error: null };
  } catch (error) {
    logger('API Error', error);
    if (error instanceof ApiError) {
      return { statusCode: 500, data: null, error: error.message };
    }
    return { statusCode: 500, data: null, error: 'An unexpected error occurred' };
  }
};
