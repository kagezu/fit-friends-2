import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, Role } from '../../types/enums';
import { Axios } from '../../services/api';
import { requireAuthorization, userInitialState } from './user-process';
import { User } from '../../types/user';
import { NavigateFunction } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { KeyName, saveItem } from '../../services/token';
import axios from 'axios';
import { responseError } from '../error/error-process';
import { RegistrationData } from '../../types/registration-data';
import { parseError } from '../../utils/parse-error';
import { QuestionnaireData } from '../../types/questionnaire-data';

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
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
          navigate(AppRoute.SignIn);
        }
      }
    }
    navigate(AppRoute.SignIn);
  }
);

export const registerAction = createAsyncThunk(
  'user/register',
  async ({ request, navigate }: { request: RegistrationData; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data: { user, accessToken, refreshToken } } = await Axios.post<UserData>(
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
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
          navigate(AppRoute.SignUp);
        }
      }
    }
  }
);

export const questionnaireAction = createAsyncThunk(
  'user/register',
  async ({ request, target, navigate }: { request: QuestionnaireData; target: AppRoute; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data }: { data: User } = await Axios.patch<User>(
        APIRoute.UpdateUser,
        request,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      dispatch(requireAuthorization(data));
      dispatch(responseError({}));
      navigate(AppRoute.SignIn);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
          navigate(target);
        }
      }
    }
  }
);