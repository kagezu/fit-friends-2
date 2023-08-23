import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Notify } from '../../types/notify';
import { notifyDelete, notifyUpdate } from './notify-process';
import { ThunkType } from '../../types/thunk-type';

export const getNotifyIndexAction = createAsyncThunk<void, void, ThunkType>(
  'notify/index',
  async (_, { dispatch, extra: api }) => {
    try {
      const { data }: { data: Notify[] } = await api.get<Notify[]>(APIRoute.Notify);
      dispatch(notifyUpdate(data));
    } catch {
      dispatch(notifyUpdate([]));
    }
  },
);

export const deleteNotifyAction = createAsyncThunk<void, { id: string; index: number }, ThunkType>(
  'notify/delete',
  async ({ id, index }, { dispatch, extra: api }) => {
    await api.delete(`${APIRoute.Notify}/${id}`);
    dispatch(notifyDelete(index));
  },
);
