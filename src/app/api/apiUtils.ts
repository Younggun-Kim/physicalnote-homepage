import { RequestConfig } from '@/app/api/fetchApi';

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export const createQueryString = (params?: Record<string, string>): string => {
  if (!params) return '';
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });
  return `?${searchParams.toString()}`;
};

export const getConfig = (options: RequestConfig): RequestInit => {
  const { ...configOptions } = options;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  return {
    ...configOptions,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
};

export const shouldAddAuth = (endpoint: string): boolean => {
  return endpoint.includes('/api');
};
