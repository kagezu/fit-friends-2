import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { User } from '../../types/user';
import { userInfoFriendAction } from '../user/user-slice';
import axios from 'axios';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { Friend } from '../../types/friend';
import { friendsAction } from './friend-slice';

export const getFriendsAction = createAsyncThunk(
  'friend/index',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<Friend[]>(APIRoute.FriendIndex);
    dispatch(friendsAction(data));
  }
);

export const getFriendAction = createAsyncThunk(
  'friend/check',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.get<User>(`${APIRoute.Friend}/${id}`);
    dispatch(userInfoFriendAction(!!data.friend));
    dispatch(responseError({}));
  }
);

export const addFriendAction = createAsyncThunk(
  'friend/add',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await Axios.post<User>(`${APIRoute.Friend}/${id}`);
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

export const deleteFriendAction = createAsyncThunk(
  'friend/delete',
  async (id: string, { dispatch }) => {
    await Axios.delete<User>(`${APIRoute.Friend}/${id}`);
    dispatch(userInfoFriendAction(false));
    dispatch(responseError({}));
  }
);
