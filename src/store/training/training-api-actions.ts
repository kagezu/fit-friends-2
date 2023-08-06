import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { Training } from '../../types/training';
import { TrainingQuery } from '../../types/training-query';

export const getTrainingsAction = createAsyncThunk(
  'user/login',
  async ({ params, trainingsAction }: { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> }, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.Training, { params });
    dispatch(trainingsAction(data));
  }
);
