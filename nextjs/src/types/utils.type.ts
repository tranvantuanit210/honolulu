export interface SuccessResponse<T> {
  status: string;
  code: number;
  message: string;
  data: T;
}

export interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
