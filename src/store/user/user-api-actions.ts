import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, Role } from '../../const';
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
import { ThunkType } from '../../types/thunk-type';

export const checkAuthAction = createAsyncThunk<void, void, ThunkType>(
  'user/checkAuth',
  async (_, { dispatch, extra: api }) => {
    try {
      const { data }: { data: User } = await api.get<User>(APIRoute.AuthCheck);
      dispatch(requireAuthorization(data));
    } catch {
      dispatch(requireAuthorization(userInitialState));
    }
  },
);

export const getUsersAction = createAsyncThunk<void, UserQuery, ThunkType>(
  'user/index',
  async (params, { dispatch, extra: api }) => {
    const { data }: { data: User[] } = await api.get<User[]>(APIRoute.UserIndex, { params });
    dispatch(usersAction(data));
  },
);

export const getUserInfoAction = createAsyncThunk<void, { id: string; navigate: NavigateFunction }, ThunkType>(
  'user/info',
  async ({ id, navigate }, { dispatch, extra: api }) => {
    try {
      const { data }: { data: User } = await api.get<User>(`${APIRoute.UserInfo}/${id}`);
      dispatch(userInfoAction(data));
    } catch {
      navigate(AppRoute.Error404);
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData & { navigate: NavigateFunction }, ThunkType>(
  'user/login',
  async ({ email, password, navigate }, { dispatch, extra: api }) => {
    try {
      const { data: { user, accessToken, refreshToken } } = await api.post<UserData>(APIRoute.SignIn, { email, password });
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

export const registerAction = createAsyncThunk<void, { request: RegistrationData; navigate: NavigateFunction }, ThunkType>(
  'user/register',
  async ({ request, navigate }, { dispatch, extra: api }) => {
    try {
      const { data: { user, accessToken, refreshToken } } = await api.post<UserData>(
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

export const questionnaireAction = createAsyncThunk<void, { request: QuestionnaireData; target: AppRoute; navigate: NavigateFunction }, ThunkType>(
  'user/register',
  async ({ request, target, navigate }, { dispatch, extra: api }) => {
    try {
      const { data }: { data: User } = await api.patch<User>(
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

export const userInfoEditAction = createAsyncThunk<void, QuestionnaireData, ThunkType>(
  'user/register',
  async (request, { dispatch, extra: api }) => {
    try {
      const { data }: { data: User } = await api.patch<User>(
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

export const getSubscribedAction = createAsyncThunk<void, string, ThunkType>(
  'subscribe/info',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.get<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);

export const newSubscribeAction = createAsyncThunk<void, string, ThunkType>(
  'subscribe/new',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.post<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);

export const deleteSubscribeAction = createAsyncThunk<void, string, ThunkType>(
  'subscribe/delete',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.delete<{ coach: string }>(`${APIRoute.Subscribe}/${id}`);
    dispatch(userSubscribedAction(!!data.coach));
  },
);
