import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Training } from '../../types/training';

export const trainingInitialState: Training[] = [];

export const trainingSpecialSlice = createSlice({
  name: NameSpace.TrainingSpecial,
  initialState: trainingInitialState,
  reducers: {
    trainingSpecialForYou:
      (state, action: PayloadAction<Training[]>) => {
        Object.assign(state, action.payload);
      }
  },
});

export const trainingPopularSlice = createSlice({
  name: NameSpace.TrainingPopular,
  initialState: trainingInitialState,
  reducers: {
    trainingPopular:
      (state, action: PayloadAction<Training[]>) => {
        Object.assign(state, action.payload);
      }
  },
});

export const trainingOffersSlice = createSlice({
  name: NameSpace.TrainingOffers,
  initialState: trainingInitialState,
  reducers: {
    trainingOffers:
      (state, action: PayloadAction<Training[]>) => {
        Object.assign(state, action.payload);
      }
  },
});

export const { trainingSpecialForYou } = trainingSpecialSlice.actions;
export const { trainingPopular } = trainingPopularSlice.actions;
export const { trainingOffers } = trainingOffersSlice.actions;
