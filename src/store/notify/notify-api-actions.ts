import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { Notify } from '../../types/notify';
import { notifyDelete, notifyUpdate } from './notify-process';

export const getNotifyIndexAction = createAsyncThunk(
  'notify/index',
  async (_, { dispatch }) => {
    try {
      const { data }: { data: Notify[] } = await Axios.get<Notify[]>(APIRoute.Notify);
      dispatch(notifyUpdate(data));
    } catch {
      dispatch(notifyUpdate([]));
    }
  },
);

export const deleteNotifyAction = createAsyncThunk(
  'notify/delete',
  async ({ id, index }: { id: string; index: number }, { dispatch }) => {
    await Axios.delete(`${APIRoute.Notify}/${id}`);
    dispatch(notifyDelete(index));
  },
);
