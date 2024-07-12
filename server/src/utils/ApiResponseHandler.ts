class ApiResponse {
  statusCode: number;
  data: {};
  message: string;
  success: boolean;
  constructor(statusCode: number, data: {}, message?: string) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
