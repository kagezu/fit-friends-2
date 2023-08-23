import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { reviewAction, reviewsAction } from './review-slice';
import { Review } from '../../types/review';
import { ReviewData } from '../../types/review-data';
import { responseError } from '../error/error-process';
import { parseError } from '../../utils/parse-error';
import axios from 'axios';
import { ThunkType } from '../../types/thunk-type';

export const getReviewsAction = createAsyncThunk<void, string, ThunkType>(
  'review/index',
  async (id: string, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
      dispatch(reviewsAction(data));
    } catch {
      dispatch(reviewsAction([]));
    }
  },
);

export const createReviewsAction = createAsyncThunk<void, ReviewData, ThunkType>(
  'review/create',
  async (request, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Review>(APIRoute.Review, request);
      dispatch(reviewAction(data));
      dispatch(responseError({}));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errors = parseError(err);
        if (errors) {
          dispatch(responseError(errors));
        }
      }
    }
  });
