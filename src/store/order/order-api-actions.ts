import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Balance } from '../../types/balance';
import { OrderData } from '../../types/order-data';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { balanceAction } from '../balance/balance-slice';
import { PersonalOrder } from '../../types/personal-order';
import { personalOrderAction, personalOrdersAction } from './order-slice';
import { OrderStatus } from '../../types/order-tatus';
import { ThunkType } from '../../types/thunk-type';
import axios from 'axios';

export const createNewOrderAction = createAsyncThunk<void, OrderData, ThunkType>(
  'order/create',
  async (request, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Balance>(APIRoute.Order, request);
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

export const getPersonalOrderAction = createAsyncThunk<void, string, ThunkType>(
  'personal-order/get',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`);
    dispatch(personalOrderAction(data));
  }
);

export const getPersonalOrdersAction = createAsyncThunk<void, void, ThunkType>(
  'personal-order/index',
  async (_, { dispatch, extra: api }) => {
    const { data } = await api.get<PersonalOrder[]>(APIRoute.PersonalOrders);
    dispatch(personalOrdersAction(data));
  }
);

export const createPersonalOrderAction = createAsyncThunk<void, string, ThunkType>(
  'personal-order/create',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.post<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`);
    dispatch(personalOrderAction(data));
  }
);

export const acceptPersonalOrderAction = createAsyncThunk<void, string, ThunkType>(
  'personal-order/accepted',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.patch<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`, { orderStatus: OrderStatus.Accepted });
    dispatch(personalOrderAction(data));
  }
);

export const rejectPersonalOrderAction = createAsyncThunk<void, string, ThunkType>(
  'personal-order/rejected',
  async (id: string, { dispatch, extra: api }) => {
    const { data } = await api.patch<PersonalOrder>(`${APIRoute.PersonalOrder}/${id}`, { orderStatus: OrderStatus.Rejected });
    dispatch(personalOrderAction(data));
  }
);
