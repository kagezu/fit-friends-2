import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Role } from '../../const';
import { User } from '../../types/store';

export const userInitialState: User = {
  role: Role.Unknown,
  name: ''
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState: userInitialState,
  reducers: {
    requireAuthorization:
      (state, action: PayloadAction<User>) => {
        state.role = action.payload.role;
        state.name = action.payload.name;
      }
  },
});

export const { requireAuthorization } = userProcess.actions;
