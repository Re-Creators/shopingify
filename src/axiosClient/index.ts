import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://shopingify-backend.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.headers) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMxNjgyZGVhYTI1MjNiNzg2YTg3YmUiLCJpYXQiOjE2NDc0MDUxMDF9.iLAo9PGGsl3LPuj8enTkxHZouWblQAa0xf8QZALMFHw";
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    }
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);

export default instance;
