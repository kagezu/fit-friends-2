import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Training } from '../../types/training';
import { userInitialState } from '../user/user-slice';

export const trainingsInitialState: Training[] = [];
export const trainingInitialState: Training = {
  id: '',
  coachId: '',
  coach: userInitialState,
  demoVideo: '',
  rating: 0,
  title: '',
  trainingLevel: '',
  trainingType: '',
  interval: '',
  price: 0,
  caloriesToBurn: 0,
  description: '',
  usersGender: '',
  specialOffer: false,
  background: '',
  totalSale: 0,
  totalAmount: 0
};

export const trainingSpecialSlice = createSlice({
  name: NameSpace.TrainingSpecial,
  initialState: trainingsInitialState,
  reducers: {
    trainingSpecialForYou:
      (state, action: PayloadAction<Training[]>) => action.payload
  },
});

export const trainingsSlice = createSlice({
  name: NameSpace.Trainings,
  initialState: trainingsInitialState,
  reducers: {
    trainingsAction:
      (state, action: PayloadAction<Training[]>) => action.payload
  },
});

export const trainingOffersSlice = createSlice({
  name: NameSpace.TrainingOffers,
  initialState: trainingsInitialState,
  reducers: {
    trainingOffers:
      (state, action: PayloadAction<Training[]>) => action.payload
  },
});

export const trainingFiltredSlice = createSlice({
  name: NameSpace.TrainingFiltred,
  initialState: trainingsInitialState,
  reducers: {
    trainingFiltred:
      (state, action: PayloadAction<Training[]>) => action.payload
  },
});

export const trainingSlice = createSlice({
  name: NameSpace.Training,
  initialState: trainingInitialState,
  reducers: {
    trainingAction:
      (state, action: PayloadAction<Training>) => action.payload
  },
});

export const { trainingSpecialForYou } = trainingSpecialSlice.actions;
export const { trainingsAction } = trainingsSlice.actions;
export const { trainingOffers } = trainingOffersSlice.actions;
export const { trainingFiltred } = trainingFiltredSlice.actions;
export const { trainingAction } = trainingSlice.actions;
