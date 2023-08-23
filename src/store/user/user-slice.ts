import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Role } from '../../const';
import { User } from '../../types/user';

export const userInitialState: User = {
  role: Role.Unknown,
  id: '',
  name: '',
  email: '',
  gender: '',
  location: ''
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState: userInitialState,
  reducers: {
    requireAuthorization:
      (state, action: PayloadAction<User>) => action.payload
  },
});

export const usersSlice = createSlice({
  name: NameSpace.Users,
  initialState: [] as User[],
  reducers: {
    usersAction:
      (state, action: PayloadAction<User[]>) => action.payload
  },
});

export const userInfoSlice = createSlice({
  name: NameSpace.UserInfo,
  initialState: userInitialState,
  reducers: {
    userInfoAction:
      (state, action: PayloadAction<User>) => action.payload,
    userInfoFriendAction:
      (state, action: PayloadAction<boolean>) => ({ ...state, friend: action.payload }),
    userSubscribedAction:
      (state, action: PayloadAction<boolean>) => ({ ...state, subscribed: action.payload })
  },
});

export const { requireAuthorization } = userProcess.actions;
export const { usersAction } = usersSlice.actions;
export const { userInfoAction, userInfoFriendAction, userSubscribedAction } = userInfoSlice.actions;
