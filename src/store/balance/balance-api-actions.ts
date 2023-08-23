import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { balanceAction, balanceInitialState } from './balance-slice';
import { Balance } from '../../types/balance';
import { ThunkType } from '../../types/thunk-type';

const DECREASE_COUNT_BALANCE = 1;

export const getBalanceAction = createAsyncThunk<void, string, ThunkType>(
  'balance/get',
  async (id: string, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Balance>(`${APIRoute.Balance}/${id}`);
      dispatch(balanceAction(data));
    } catch {
      dispatch(balanceAction(balanceInitialState));
    }
  },
);

export const decreaseBalanceAction = createAsyncThunk<void, string, ThunkType>(
  'balance/decrease',
  async (id: string, { dispatch, extra: api }) => {
    try {
      const { data } = await api.patch<Balance>(APIRoute.BalanceDecrease, {
        training: id,
        count: DECREASE_COUNT_BALANCE
      });
      dispatch(balanceAction(data));
    } catch {
      dispatch(balanceAction(balanceInitialState));
    }
  },
);
