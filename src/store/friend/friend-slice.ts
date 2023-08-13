import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { User } from '../../types/user';

export const friendsSlice = createSlice({
  name: NameSpace.Friends,
  initialState: [] as User[],
  reducers: {
    friendsAction:
      (state, action: PayloadAction<User[]>) => action.payload
  }
});

export const { friendsAction } = friendsSlice.actions;
