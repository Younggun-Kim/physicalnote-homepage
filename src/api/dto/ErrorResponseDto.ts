import { AxiosError } from 'axios';

export type ErrorResponseType = AxiosError<ErrorResponseDto, any>;

export default interface ErrorResponseDto {
  devMessage: string;
  endMessage: string;
  error: string;
  message: string;
  status: number;
}
