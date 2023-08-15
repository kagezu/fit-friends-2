import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Friend } from '../../types/friend';

export const friendsSlice = createSlice({
  name: NameSpace.Friends,
  initialState: [] as Friend[],
  reducers: {
    friendsAction:
      (state, action: PayloadAction<Friend[]>) => action.payload
  }
});

export const { friendsAction } = friendsSlice.actions;
