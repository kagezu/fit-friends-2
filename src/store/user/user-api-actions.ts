import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, Role } from '../../const';
import { Axios } from '../../services/api';
import { requireAuthorization, userInfoAction, userInitialState, userSubscribedAction, usersAction } from './user-slice';
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
import { getNotifyIndexAction } from '../notify/notify-api-actions';
import { UserQuery } from '../../types/user-query';

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

export const getUsersAction = createAsyncThunk(
  'user/index',
  async (params: UserQuery, { dispatch }) => {
    const { data }: { data: User[] } = await Axios.get<User[]>(APIRoute.UserIndex, { params });
    dispatch(usersAction(data));
  },
);

export const getUserInfoAction = createAsyncThunk(
  'user/info',
  async ({ id, navigate }: { id: string; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data }: { data: User } = await Axios.get<User>(`${APIRoute.UserInfo}/${id}`);
      dispatch(userInfoAction(data));
    } catch {
      navigate(AppRoute.Error404);
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
      dispatch(getNotifyIndexAction());
      navigate(AppRoute.SignUp);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
          navigate(AppRoute.SignIn);
        }
      }
    }
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

export const userInfoEditAction = createAsyncThunk(
  'user/register',
  async (request: QuestionnaireData, { dispatch }) => {
    try {
      const { data }: { data: User } = await Axios.patch<User>(
        APIRoute.UpdateUser,
        request,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      dispatch(requireAuthorization(data));
      dispatch(responseError({}));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
        }
      }
    }
  }
);

export const getSubscribedAction = createAsyncThunk(
  'subscribe/info',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.get<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);

export const newSubscribeAction = createAsyncThunk(
  'subscribe/new',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.post<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);

export const deleteSubscribeAction = createAsyncThunk(
  'subscribe/delete',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.delete<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);
