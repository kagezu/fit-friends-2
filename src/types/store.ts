import { store } from '../store/index';
import { Role } from '../const';

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type User = {
  name: string;
  role: Role;
};
