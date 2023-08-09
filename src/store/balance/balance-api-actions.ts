import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { balanceAction, balanceInitialState } from './balance-slice';
import { Balance } from '../../types/balance';

const DECREASE_COUNT_BALANCE = 1;

export const getBalanceAction = createAsyncThunk(
  'balance/get',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await Axios.get<Balance>(`${APIRoute.Balance}/${id}`);
      dispatch(balanceAction(data));
    } catch {
      dispatch(balanceAction(balanceInitialState));
    }
  },
);

export const decreaseBalanceAction = createAsyncThunk(
  'balance/decrease',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await Axios.patch<Balance>(APIRoute.BalanceDecrease, {
        training: id,
        count: DECREASE_COUNT_BALANCE
      });
      dispatch(balanceAction(data));
    } catch {
      dispatch(balanceAction(balanceInitialState));
    }
  },
);
