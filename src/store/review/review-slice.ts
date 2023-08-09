import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Review } from '../../types/review';

export const reviewsInitialState: Review[] = [];

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState: reviewsInitialState,
  reducers: {
    reviewsAction:
      (state, action: PayloadAction<Review[]>) => action.payload,
    reviewAction:
      (state, action: PayloadAction<Review>) => [action.payload, ...state]
  }
});

export const { reviewsAction, reviewAction } = reviewsSlice.actions;
