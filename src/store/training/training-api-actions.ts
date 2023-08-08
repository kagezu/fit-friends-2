import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../const';
import { Axios } from '../../services/api';
import { Training } from '../../types/training';
import { TrainingQuery } from '../../types/training-query';
import { trainingAction } from './training-slice';
import { NavigateFunction } from 'react-router-dom';

export const getTrainingsAction = createAsyncThunk(
  'user/login',
  async ({ params, trainingsAction }: { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> }, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.Training, { params });
    dispatch(trainingsAction(data));
  }
);

export const getTrainingAction = createAsyncThunk(
  'user/login',
  async ({ id, navigate }: { id: string; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data } = await Axios.get<Training>(`${APIRoute.TrainingDetail}/${id}`);
      dispatch(trainingAction(data));
    } catch {
      navigate(AppRoute.Error404);
    }
  }
);
