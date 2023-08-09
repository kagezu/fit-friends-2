import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { reviewAction, reviewsAction } from './review-slice';
import { Review } from '../../types/review';
import { ReviewData } from '../../types/review-data';
import { responseError } from '../error/error-process';
import { parseError } from '../../utils/parse-error';
import axios from 'axios';

export const getReviewsAction = createAsyncThunk(
  'review/index',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await Axios.get<Review[]>(`${APIRoute.Review}/${id}`);
      dispatch(reviewsAction(data));
    } catch {
      dispatch(reviewsAction([]));
    }
  },
);

export const createReviewsAction = createAsyncThunk(
  'review/create',
  async (request: ReviewData, { dispatch }) => {
    try {
      const { data } = await Axios.post<Review>(`${APIRoute.Review}`, request);
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
