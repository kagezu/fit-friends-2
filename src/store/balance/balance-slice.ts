import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Balance } from '../../types/balance';

export const balanceInitialState: Balance = {
  count: 0
};

export const balanceSlice = createSlice({
  name: NameSpace.Balance,
  initialState: balanceInitialState,
  reducers: {
    balanceAction:
      (state, action: PayloadAction<Balance>) => action.payload
  }
});

export const { balanceAction } = balanceSlice.actions;
