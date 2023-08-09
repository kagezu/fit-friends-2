import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess, usersForCompanySlice } from './user/user-slice';
import { errorProcess } from './error/error-process';
import { notifyProcess } from './notify/notify-process';
import { trainingSpecialSlice, trainingPopularSlice, trainingOffersSlice, trainingFiltredSlice, trainingSlice } from './training/training-slice';
import { reviewsSlice } from './review/review-slice';
import { balanceSlice } from './balance/balance-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.UsersForCompany]: usersForCompanySlice.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Notify]: notifyProcess.reducer,
  [NameSpace.TrainingSpecial]: trainingSpecialSlice.reducer,
  [NameSpace.TrainingPopular]: trainingPopularSlice.reducer,
  [NameSpace.TrainingOffers]: trainingOffersSlice.reducer,
  [NameSpace.TrainingFiltred]: trainingFiltredSlice.reducer,
  [NameSpace.Training]: trainingSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Balance]: balanceSlice.reducer,
});
