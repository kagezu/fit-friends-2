import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { Balance } from '../../types/balance';
import axios from 'axios';
import { OrderData } from '../../types/order-data';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { balanceAction } from '../balance/balance-slice';

export const createNewOrderAction = createAsyncThunk(
  'order/create',
  async (request: OrderData, { dispatch }) => {
    try {
      const { data } = await Axios.post<Balance>(`${APIRoute.Order}`, request);
      dispatch(balanceAction(data));
      dispatch(responseError({}));
    }
    catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
        }
      }
    }
  }
);
