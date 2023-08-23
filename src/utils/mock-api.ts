import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { StoreType } from '../types/store';
import { createAPI } from '../services/api';
import { ThunkDispatch } from '@reduxjs/toolkit';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];

export const mockApi = new MockAdapter(api);
export const mockStore = configureMockStore<
  StoreType,
  Action<string>,
  ThunkDispatch<StoreType, typeof api, Action>
>(middleware);
export type mockStoreType = ReturnType<typeof mockStore>;
export const extractTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
export const extractActions = <T>(actions: Action<string>[]) => (actions as unknown as { type: string; payload: T }[]).map(({ type, payload }) => [type, payload]);
