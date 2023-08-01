import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Role } from '../../types/enums';
import { User } from '../../types/user';

export const userInitialState: User = {
  role: Role.Unknown,
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
      (state, action: PayloadAction<User>) => {
        Object.assign(state, action.payload);
      }
  },
});

export const { requireAuthorization } = userProcess.actions;
