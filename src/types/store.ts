import { store } from '../store/index';

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

