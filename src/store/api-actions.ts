import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../const';
import { Axios } from '../services/api';
import { requireAuthorization, userInitialState } from './user-process/user-process';
import { User } from '../types/user';
import { NavigateFunction } from 'react-router-dom';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { KeyName, saveItem } from '../services/token';

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async (_, { dispatch }) => {
    try {
      const { data }: { data: User } = await Axios.get<User>(APIRoute.AuthCheck);
      dispatch(requireAuthorization(data));
    } catch {
      dispatch(requireAuthorization(userInitialState));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ email, password, navigate }: AuthData & { navigate: NavigateFunction }, { dispatch }) => {
    const { data: { user, accessToken, refreshToken } } = await Axios.post<UserData>(APIRoute.SignIn, { email, password });
    saveItem(KeyName.Token, accessToken);
    saveItem(KeyName.RefreshToken, refreshToken);
    dispatch(requireAuthorization(user));
    navigate(AppRoute.SignIn);
  }
);
