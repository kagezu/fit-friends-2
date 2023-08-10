import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../const';
import { Axios } from '../../services/api';
import { Training } from '../../types/training';
import { TrainingQuery } from '../../types/training-query';
import { trainingAction } from './training-slice';
import { NavigateFunction } from 'react-router-dom';
import { TrainingData } from '../../types/training-data';
import axios from 'axios';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';

export const getTrainingsAction = createAsyncThunk(
  'training/index',
  async ({ params, trainingsAction }: { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> }, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.Training, { params });
    dispatch(trainingsAction(data));
  }
);

export const getMyTrainingsAction = createAsyncThunk(
  'training/my',
  async ({ params, trainingsAction }: { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> }, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.MyTraining, { params });
    dispatch(trainingsAction(data));
  }
);

export const getTrainingAction = createAsyncThunk(
  'training/info',
  async ({ id, navigate }: { id: string; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data } = await Axios.get<Training>(`${APIRoute.TrainingDetail}/${id}`);
      dispatch(trainingAction(data));
    } catch {
      navigate(AppRoute.Error404);
    }
  }
);

export const createTrainingAction = createAsyncThunk(
  'training/create',
  async ({ request, navigate }: { request: TrainingData; navigate: NavigateFunction }, { dispatch }) => {
    try {
      const { data } = await Axios.post<Training>(APIRoute.Training,
        request,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      dispatch(trainingAction(data));
      dispatch(responseError({}));
      navigate(`${AppRoute.TrainingCardUser}/${data.id}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
        }
      }
    }
  }
);
