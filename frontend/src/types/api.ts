export interface ApiResponse<T> {
  data: T;
  error: string | null;
  message: string | null;
  statusCode: number;
}
