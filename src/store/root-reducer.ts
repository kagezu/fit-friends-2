import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user/user-process';
import { errorProcess } from './error/error-process';
import { notifyProcess } from './notify/notify-process';
import { trainingSpecialSlice, trainingPopularSlice, trainingOffersSlice } from './training/training-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Notify]: notifyProcess.reducer,
  [NameSpace.TrainingSpecial]: trainingSpecialSlice.reducer,
  [NameSpace.TrainingPopular]: trainingPopularSlice.reducer,
  [NameSpace.TrainingOffers]: trainingOffersSlice.reducer,
});
