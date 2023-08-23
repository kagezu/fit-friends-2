import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../const';
import { Training } from '../../types/training';
import { TrainingQuery } from '../../types/training-query';
import { trainingAction, trainingFiltred } from './training-slice';
import { NavigateFunction } from 'react-router-dom';
import { TrainingData } from '../../types/training-data';
import axios from 'axios';
import { parseError } from '../../utils/parse-error';
import { responseError } from '../error/error-process';
import { ThunkType } from '../../types/thunk-type';

export const getTrainingsAction = createAsyncThunk<
  void,
  { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> },
  ThunkType>(
    'training/index',
    async ({ params, trainingsAction }, { dispatch, extra: api }) => {
      const { data } = await api.get<Training[]>(APIRoute.Training, { params });
      dispatch(trainingsAction(data));
    });

export const getMyTrainingsAction = createAsyncThunk<
  void,
  { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> },
  ThunkType>(
    'training/my',
    async ({ params, trainingsAction }: { params: TrainingQuery; trainingsAction: (argument: Training[]) => PayloadAction<Training[]> }, { dispatch, extra: api }) => {
      const { data } = await api.get<Training[]>(APIRoute.MyTraining, { params });
      dispatch(trainingsAction(data));
    });

export const getMyBuyTrainingsAction = createAsyncThunk<void, void, ThunkType>(
  'balance/index',
  async (_, { dispatch, extra: api }) => {
    const { data } = await api.get<Training[]>(APIRoute.TrainingBuy);
    dispatch(trainingFiltred(data));
  }
);

export const getTrainingAction = createAsyncThunk<void, { id: string; navigate: NavigateFunction }, ThunkType>(
  'training/info',
  async ({ id, navigate }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Training>(`${APIRoute.TrainingDetail}/${id}`);
      dispatch(trainingAction(data));
    } catch {
      navigate(AppRoute.Error404);
    }
  }
);

export const createTrainingAction = createAsyncThunk<void, { request: TrainingData; navigate: NavigateFunction }, ThunkType>(
  'training/create',
  async ({ request, navigate }: { request: TrainingData; navigate: NavigateFunction }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Training>(APIRoute.TrainingCreate,
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

export const updateTrainingAction = createAsyncThunk<void, { request: TrainingData; id: string }, ThunkType>(
  'training/update',
  async ({ request, id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.patch<Training>(`${APIRoute.TrainingCreate}/${id}`,
        request,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      dispatch(trainingAction(data));
      dispatch(responseError({}));
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
