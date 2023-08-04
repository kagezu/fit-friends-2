import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Notify } from '../../types/notify';

export const userInitialState: Notify[] = [];

export const notifyProcess = createSlice({
  name: NameSpace.User,
  initialState: userInitialState,
  reducers: {
    notifyUpdate:
      (state, action: PayloadAction<Notify[]>) => {
        Object.assign(state, action.payload);
      },
    notifyDelete:
      (state, action: PayloadAction<number>) => {
        state.splice(action.payload, 1);
      }
  },
});

export const { notifyUpdate, notifyDelete } = notifyProcess.actions;
