import { AxiosInstance } from 'axios';
import { AppDispatch } from './store';

export type ThunkType = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}
