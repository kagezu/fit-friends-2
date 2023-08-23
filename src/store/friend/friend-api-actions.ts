import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { User } from '../../types/user';
import { userInfoFriendAction } from '../user/user-slice';
import axios from 'axios';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { Friend } from '../../types/friend';
import { friendsAction } from './friend-slice';
import { ThunkType } from '../../types/thunk-type';

export const getFriendsAction = createAsyncThunk<void, void, ThunkType>(
  'friend/index',
  async (_, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Friend[]>(APIRoute.FriendIndex);
      dispatch(friendsAction(data));
    } catch {
      dispatch(friendsAction([]));
    }
  }
);

export const getFriendAction = createAsyncThunk<void, string, ThunkType>(
  'friend/check',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.get<User>(`${APIRoute.Friend}/${id}`);
    dispatch(userInfoFriendAction(!!data.friend));
    dispatch(responseError({}));
  }
);

export const addFriendAction = createAsyncThunk<void, string, ThunkType>(
  'friend/add',
  async (id: string, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<User>(`${APIRoute.Friend}/${id}`);
      dispatch(userInfoFriendAction(!!data.friend));
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

export const deleteFriendAction = createAsyncThunk<void, string, ThunkType>(
  'friend/delete',
  async (id: string, { dispatch, extra: api }) => {
    await api.delete<User>(`${APIRoute.Friend}/${id}`);
    dispatch(userInfoFriendAction(false));
    dispatch(responseError({}));
  }
);
