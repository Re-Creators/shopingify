import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://shopingify-backend.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.headers) {
    const token = localStorage.getItem("shopingify_token");
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
