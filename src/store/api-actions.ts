import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, Role } from '../const';
import { Axios } from '../services/api';
import { requireAuthorization, userInitialState } from './user-process/user-process';
import { User } from '../types/user';
import { NavigateFunction } from 'react-router-dom';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { KeyName, saveItem } from '../services/token';
import axios from 'axios';
import { responseError } from './error/error';
import { ErrorList } from '../types/types';
import { RegistrationData } from '../types/registration-data';

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
    try {
      const { data: { user, accessToken, refreshToken } } = await Axios.post<UserData>(APIRoute.SignIn, { email, password });
      saveItem(KeyName.Token, accessToken);
      saveItem(KeyName.RefreshToken, refreshToken);
      dispatch(requireAuthorization(user));
      dispatch(responseError({}));
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        const { message } = err.response.data as ErrorList;
        const errors: ErrorList = {};
        if (Array.isArray(message)) {
          message.forEach((item: string) => {
            const splits: string[] = item.split(' ');
            errors[splits.shift() as string] = splits.join(' ');
          });
        } else {
          errors['message'] = message as unknown as string;
        }
        dispatch(responseError(errors));
      }
    }

    navigate(AppRoute.SignIn);
  }
);

export const registerAction = createAsyncThunk(
  'user/register',
  async ({ request, navigate }: { request: RegistrationData; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const {
        data: { user, accessToken, refreshToken } } = await Axios.post<UserData>(
          APIRoute.SignUp,
          request,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
      saveItem(KeyName.Token, accessToken);
      saveItem(KeyName.RefreshToken, refreshToken);
      dispatch(requireAuthorization(user));
      dispatch(responseError({}));

      if (user.role === Role.User) {
        navigate(AppRoute.QuestionnaireUser);
      }
      navigate(AppRoute.QuestionnaireCoach);

    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        const { message } = err.response.data as ErrorList;
        const errors: ErrorList = {};
        if (Array.isArray(message)) {
          message.forEach((item: string) => {
            const splits: string[] = item.split(' ');
            errors[splits.shift() as string] = splits.join(' ');
          });
        } else {
          const splits: string[] = message.split(' ');
          errors[splits.shift() as string] = splits.join(' ');
        }
        dispatch(responseError(errors));
        navigate(AppRoute.SignUp);
      }
    }
  }
);

