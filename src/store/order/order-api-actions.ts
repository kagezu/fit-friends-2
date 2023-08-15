import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { Balance } from '../../types/balance';
import axios from 'axios';
import { OrderData } from '../../types/order-data';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { balanceAction } from '../balance/balance-slice';
import { PersonalOrder } from '../../types/personal-order';
import { personalOrderAction, personalOrdersAction } from './order-slice';
import { OrderStatus } from '../../types/order-tatus';

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

export const getPersonalOrderAction = createAsyncThunk(
  'personal-order/get',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.get<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`);
    dispatch(personalOrderAction(data));
  }
);

export const getPersonalOrdersAction = createAsyncThunk(
  'personal-order/index',
  async (_, { dispatch }) => {
    const { data } = await Axios.get<PersonalOrder[]>(APIRoute.PersonalOrders);
    dispatch(personalOrdersAction(data));
  }
);

export const createPersonalOrderAction = createAsyncThunk(
  'personal-order/create',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.post<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`);
    dispatch(personalOrderAction(data));
  }
);

export const acceptPersonalOrderAction = createAsyncThunk(
  'personal-order/patch',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.patch<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`, { orderStatus: OrderStatus.Accepted });
    dispatch(personalOrderAction(data));
  }
);

export const rejectPersonalOrderAction = createAsyncThunk(
  'personal-order/patch',
  async (id: string, { dispatch }) => {
    const { data } = await Axios.patch<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`, { orderStatus: OrderStatus.Rejected });
    dispatch(personalOrderAction(data));
  }
);
