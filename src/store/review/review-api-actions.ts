import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';
import { Axios } from '../../services/api';
import { reviewsAction } from './review-slice';
import { Review } from '../../types/review';

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
