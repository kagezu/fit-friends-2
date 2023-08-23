import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { KeyName, getItem } from './token';

const BACKEND_URL = 'http://localhost:3333/api';
const REQUEST_TIMEOUT = 5000;
const AUTHORIZATION_FIELD = 'Authorization';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getItem(KeyName.Token);

      if (token && config.headers) {
        config.headers[AUTHORIZATION_FIELD] = `Bearer ${token}`;
      }

      return config;
    },
  );

  return api;
};
