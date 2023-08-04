import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { Training } from '../../types/training';
import { trainingPopular, trainingSpecialForYou } from './training-slice';
import { TrainingQuery } from '../../types/training-query';


export const trainingSpecialAction = createAsyncThunk(
  'user/login',
  async (params: TrainingQuery, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.Training, { params });
    dispatch(trainingSpecialForYou(data));
  }
);

export const trainingPopularAction = createAsyncThunk(
  'user/login',
  async (params: TrainingQuery, { dispatch }) => {
    const { data } = await Axios.get<Training[]>(APIRoute.Training, { params });
    dispatch(trainingPopular(data));
  }
);
