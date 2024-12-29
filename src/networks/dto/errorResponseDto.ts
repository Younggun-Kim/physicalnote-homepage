import { AxiosError } from 'axios';

export type ErrorResponseType = AxiosError<ErrorResponseDto>;

interface ErrorResponseDto {
  status: number;
  error: string;
  message: string;
  engMessage: string;
  devMessage: string;
}
