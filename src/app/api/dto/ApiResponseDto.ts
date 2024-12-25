export interface ApiResponse<T> {
  statusCode: number;
  data: T | null;
  error: string | null;
}
